import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscussService} from './discuss.service';

@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit {

  showMainPage:boolean=true;
  recievedQuestions:any;  
  error:any;
  questionObject:any;
  comments:any;
  isVotesIncreased:any;
  isVotesDecreased:any;
  showNewCommentInputField:boolean=false;
  textAreaNewComment:any;
  textAreaNewQuestion:any;
  titleTextNewQuestion:any;
  showNewQuestionInputField:boolean=false;

  constructor(private discussService:DiscussService,private router:Router) { 
    // console.log("const func", this.showMainPage);
  }

  ngOnInit(): void {
    this.fetchData();
    this.showMainPage=true;

  }

  fetchData(){
    this.discussService.getDiscussions().subscribe(
      success=>{this.recievedQuestions=success;
              },
      error=>this.error=error
    );
  }

  expandCard(questionObject:any){
    this.showMainPage=false;
    // localStorage.setItem("questionObject", JSON.stringify(questionObject));    
    // localStorage.setItem("recievedQuestions", JSON.stringify(this.recievedQuestions));
    // let url='/discuss/'+questionObject.questionId;
    // this.router.navigate([url],{state:{questionObject:questionObject}});
    this.questionObject=questionObject;
    this.comments=questionObject.comments;
    this.viewsIncrease();
  }
 
  backToQuestionsList(){
    this.showMainPage=true;
  }

  addNewQuestion(){
    this.showNewQuestionInputField=!this.showNewQuestionInputField;
  }

  addNewComment(){
    this.showNewCommentInputField=!this.showNewCommentInputField;
  }
  
  postNewComment(){
    console.log(this.textAreaNewComment);
    this.showNewCommentInputField=false;
    this.discussService.postComment(this.questionObject.questionId,this.textAreaNewComment).subscribe(
      success=>{  },
      error=>{  }
    );

    for(let i=0;i<this.recievedQuestions.length;i++){
      if(this.questionObject.questionId==this.recievedQuestions[i].questionId ){
        let newCommentPush = {"answer": this.textAreaNewComment, "likes": 0, "dislikes": 0,
                                    "isVerified": "false","userIdAnswered": "answerUser8",
                                    "answerId": "ANS90"};
        this.recievedQuestions[i].comments.push(newCommentPush);
        console.log(this.recievedQuestions[i].comments);
      }
  }

  }

  postNewQuestion(){
    console.log(this.textAreaNewQuestion);
    console.log(this.titleTextNewQuestion);
    this.showNewQuestionInputField=false;
    this.discussService.postQuestion(this.textAreaNewQuestion,this.titleTextNewQuestion).subscribe(
      success=>{  },
      error=>{  }
    );
        let newQuestionPush = {questionId:"900",title:this.titleTextNewQuestion,
                                    question:this.textAreaNewQuestion,
                                    userId:"testUserAddQue",queryDate:"10-06-21",upVotes:0,downVotes:0,views:0,
                              };
        this.recievedQuestions.push(newQuestionPush);
     
  }

  increaseVotes(singlecomment:any){
    this.discussService.increaseVotes(this.questionObject.questionId,singlecomment.answerId).subscribe(
      success=>{this.isVotesIncreased=success; 
      },
      error=>{this.isVotesIncreased=error;console.log(error);}
    );

    for(let i=0;i<this.recievedQuestions.length;i++){
        if(this.questionObject.questionId==this.recievedQuestions[i].questionId ){
          var cmts=this.recievedQuestions[i].comments;
          for(let j=0;j<cmts.length;j++){
            if(singlecomment.answerId==cmts[j].answerId){
              this.recievedQuestions[i].comments[j].likes=this.recievedQuestions[i].comments[j].likes+1;
            }
          }
        }
    }
  }




  decreaseVotes(singlecomment:any){
    this.discussService.decreaseVotes(this.questionObject.questionId,singlecomment.answerId).subscribe(
      success=>{this.isVotesDecreased=success;},
      error=>this.isVotesDecreased=error
    );
    
    for(let i=0;i<this.recievedQuestions.length;i++){
      if(this.questionObject.questionId==this.recievedQuestions[i].questionId ){
        var cmts=this.recievedQuestions[i].comments;
        for(let j=0;j<cmts.length;j++){
          if(singlecomment.answerId==cmts[j].answerId){
            this.recievedQuestions[i].comments[j].dislikes=this.recievedQuestions[i].comments[j].dislikes+1;
          }
        }
      }
  }
  }

  viewsIncrease(){
    this.discussService.viewsIncrease(this.questionObject.questionId).subscribe(
      success=>{ },
      error=>{ }
    );

    for(let i=0;i<this.recievedQuestions.length;i++){
        if(this.questionObject.questionId==this.recievedQuestions[i].questionId){
          this.recievedQuestions[i].views=this.recievedQuestions[i].views+1;
        }
    }
  }

  upVotes(){
    this.discussService.upVotes(this.questionObject.questionId).subscribe(
      success=>{ },
      error=>{ }
    );

    for(let i=0;i<this.recievedQuestions.length;i++){
        if(this.questionObject.questionId==this.recievedQuestions[i].questionId){
          this.recievedQuestions[i].upVotes=this.recievedQuestions[i].upVotes+1;
        }
    }
  }
  downVotes(){
    this.discussService.downVotes(this.questionObject.questionId).subscribe(
      success=>{ },
      error=>{ }
    );

    for(let i=0;i<this.recievedQuestions.length;i++){
        if(this.questionObject.questionId==this.recievedQuestions[i].questionId){
          this.recievedQuestions[i].downVotes=this.recievedQuestions[i].downVotes+1;
        }
    }
  }



}
