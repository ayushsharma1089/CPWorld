import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContestComponent } from './contest/contest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { PlatformComponent } from './platform/platform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import { DiscussComponent } from './discuss/discuss.component';
import { QuestioncardComponent } from './questioncard/questioncard.component';
import { QuestionAnswerComponent } from './discuss/question-answer/question-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContestComponent,
    PlatformComponent,
    DiscussComponent,
    QuestioncardComponent,
    QuestionAnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
