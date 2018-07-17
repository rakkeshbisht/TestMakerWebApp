import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuestionListComponent } from "./components/question-list/question-list.component";
import { QuestionEditComponent } from "./components/question-edit/question-edit.component";
import { AnswerListComponent } from "./components/answer-list/answer-list.component";
import { AnswerEditComponent } from "./components/answer-edit/answer-edit.component";
import { ResultListComponent } from "./components/result-list/result-list.component";
import { ResultEditComponent } from "./components/result-edit/result-edit.component";
import { QuizComponent } from './components/quiz/quiz.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    QuizCreateComponent,
    FetchDataComponent,
    HomeComponent,
    QuizListComponent,
    QuizComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    QuestionListComponent,
    QuestionEditComponent,
    AnswerListComponent,
    AnswerEditComponent,
    ResultListComponent,
    ResultEditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'quiz/create', component: QuizCreateComponent },
      { path: 'quiz/edit/:id', component: QuizCreateComponent },
      { path: 'fetch-data', component: FetchDataComponent },  
      { path: 'quiz/:id', component: QuizComponent }, 
      { path: 'question/create/:id', component: QuestionEditComponent }, 
      { path: 'question/edit/:id', component: QuestionEditComponent }, 
      { path: 'answer/edit/:id', component: AnswerEditComponent }, 
      { path: 'answer/create/:id', component: AnswerEditComponent }, 
      { path: 'result/edit/:id', component: ResultEditComponent }, 
      { path: 'result/create/:id', component: ResultEditComponent }, 
      { path: 'about', component: AboutComponent },  
      { path: 'login', component: LoginComponent },  
      { path: '**', component: PageNotFoundComponent }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
