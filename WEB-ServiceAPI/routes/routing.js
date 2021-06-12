const express = require('express'); 
const routing = express.Router(); 
const serv=require('../service/contests');

routing.use(express.json());

//get list of All contests
routing.get("/getAllContests",async(req,res,next)=>{
    let contests=await serv.getAllContests();
    res.send(contests);    
});

//get list of All discussions
routing.get("/getDiscuss",async(req,res,next)=>{
    let discussions=await serv.getDiscuss();
    res.send(discussions);    
});

//increase Votes
routing.get("/increaseVotes/:questionId/:answerId",async(req,res,next)=>{
    let  increaseVotes=await serv.increaseVotes(req.params.questionId,req.params.answerId);
    res.send(true);    
});

//increase Votes
routing.get("/decreaseVotes/:questionId/:answerId",async(req,res,next)=>{
    let  decreaseVotes=await serv.decreaseVotes(req.params.questionId,req.params.answerId);
    res.send(true);    
});

module.exports=routing;