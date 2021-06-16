import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussService {

  constructor(private http:HttpClient) { }

  getDiscussions():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/getDiscuss");
  }

  increaseVotes(questionId:any,answerId:any):Observable<any[]>{
    let url="http://localhost:3000/increaseVotes/"+questionId+"/"+answerId;
    return this.http.get<any[]>(url);
  }

  decreaseVotes(questionId:any,answerId:any):Observable<any[]>{
    let url="http://localhost:3000/decreaseVotes/"+questionId+"/"+answerId;
    return this.http.get<any[]>(url);
  }

  postComment(questionId:any,newCommentText:any):Observable<any[]>{
    let url="http://localhost:3000/postComment/"+questionId+"/"+newCommentText;
    return this.http.get<any[]>(url);
  }
  postQuestion(newQuestionText:any,newQuestionTitle:any):Observable<any[]>{
    let url="http://localhost:3000/postQuestion/"+newQuestionText+"/"+newQuestionTitle;
    console.log(url);
    console.log(newQuestionText);
    return this.http.get<any[]>(url);
  }

  viewsIncrease(questionId:any):Observable<any[]>{
    let url="http://localhost:3000/viewsIncrease/"+questionId;
    return this.http.get<any[]>(url);
  }
  upVotes(questionId:any):Observable<any[]>{
    let url="http://localhost:3000/upVotes/"+questionId;
    return this.http.get<any[]>(url);
  }
  downVotes(questionId:any):Observable<any[]>{
    let url="http://localhost:3000/downVotes/"+questionId;
    return this.http.get<any[]>(url);
  }
}
