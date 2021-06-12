let connection=require('../utilities/connection');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch');

let modelObj={};

//fetch All the contest from database
modelObj.getAllContests = async()=>{
    try{
        var url="https://kontests.net/api/v1/all";
        var obj=await fetch(url)
                      .then(res => res.json())
                      .then(json =>{return json});
        return obj;
    }
    catch(error){
        let err= new Error("No data Found");
        err.status=404;
        throw err;
    }
}

modelObj.getDiscuss = async()=>{
    try{
       let discussionModel=await connection.getDiscussModel();
        // let discussArray =await discussionModel.create
        // ({questionId:"440",title:"Demo filequestion sample question Demo filequestion sample question Demo filequestion sample question",
        // question:"Demo filequestion sample question",
        // userId:"testUser1",queryDate:"10-06-21",upVotes:374,downVotes:156,views:8534,
        // comments:[{answer:" 1 sample ans",likes:40,dislikes:8,isVerified:"Trre",
        // userIdAnswered:"answerUser1",answerId:"ANS45" }]});
    //    console.log("My  =     ",discussArray);

       let discussArray =await discussionModel.find({});
       if(discussArray.length>0) return discussArray; 
    }
    catch(error){
        let err= new Error("No data Found");
        err.status=404;
        throw err;
    }
}

modelObj.increaseVotes = async(questionId,answerId)=>{
    try{
       let discussionModel=await connection.getDiscussModel();
       let discussArray =await discussionModel.updateOne({questionId:questionId,'comments.answerId':answerId},
                                                         {$inc:{'comments.$.likes':1}});                                                         
        console.log(" in  ",discussArray.nModified," ",questionId," ",answerId);
       if(discussArray.nModified>0) return true; 
    }
    catch(error){
        let err= new Error("No data Found");
        err.status=404;
        throw err;
    }
}
modelObj.decreaseVotes = async(questionId,answerId)=>{
    try{
       let discussionModel=await connection.getDiscussModel();
       let discussArray =await discussionModel.updateOne({questionId:questionId,'comments.answerId':answerId},
                                                         {$inc:{'comments.$.dislikes':-1}});                                                         
         console.log(" in  ",discussArray.nModified," ",questionId," ",answerId);
       if(discussArray.nModified>0) return true; 
    }
    catch(error){
        let err= new Error("No data Found");
        err.status=404;
        throw err;
    }
}

module.exports= modelObj;