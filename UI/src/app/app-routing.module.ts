import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { ContestComponent } from './contest/contest.component';
import { DiscussComponent } from './discuss/discuss.component';
import { QuestioncardComponent } from './questioncard/questioncard.component';
import { QuestionAnswerComponent } from './discuss/question-answer/question-answer.component';

const routes: Routes = [
  {path:'platform/:id',component:PlatformComponent},
  {path:'home',component:ContestComponent},
  {path:'discuss',component:DiscussComponent},
  {path:'questioncard',component:QuestioncardComponent},
  {path:'discuss/:questionId', component:QuestionAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
