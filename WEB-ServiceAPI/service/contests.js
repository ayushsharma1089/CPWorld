let getAllDataModel= require('../model/contests');

let serv={};

serv.getAllContests = async()=>{
        let contests=getAllDataModel.getAllContests();
        return contests;
}

serv.getDiscuss = async()=>{
        let discussions=await getAllDataModel.getDiscuss();
        return discussions;
}

serv.increaseVotes = async(questionId,answerId)=>{
        let increaseVotes=await getAllDataModel.increaseVotes(questionId,answerId);
        return increaseVotes;
}
serv.decreaseVotes = async(questionId,answerId)=>{
        let decreaseVotes=await getAllDataModel.decreaseVotes(questionId,answerId);
        return decreaseVotes;
}
module.exports= serv;