import { Component, OnInit } from '@angular/core';
import { DiscussService } from '../discuss.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  questionObject:any;
  comments:any;
  isVotesIncreased:any;
  recievedQuestions:any;


  constructor(private discussService:DiscussService) {
    this.questionObject=JSON.parse(String(localStorage.getItem("questionObject")));    
    this.recievedQuestions=JSON.parse(String(localStorage.getItem("recievedQuestions")));
    this.comments=this.questionObject.comments;
    console.log("thi ",this.comments);
   }

  ngOnInit(): void {
  }

  increaseVotes(singlecomment:any){
    console.log("inside");
    this.discussService.increaseVotes(this.questionObject.questionId,singlecomment.answerId).subscribe(
      success=>{this.isVotesIncreased=success;
                
      },
      error=>{this.isVotesIncreased=error;console.log(error);}
    );
  }

}
