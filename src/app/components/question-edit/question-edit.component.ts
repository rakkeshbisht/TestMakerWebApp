import { Component,Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'question-edit',
    templateUrl: './question-edit.component.html',
    styleUrls : ['./question-edit.component.css']
})

export class QuestionEditComponent{
    title : string;
    question : Question;

    editMode: boolean;

    constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private http: HttpClient) {

        this.question = <Question>{};

        var id = +this.activatedRoute.snapshot.params["id"];

        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");

        if (this.editMode) {
            let url =  `${environment.api_url}` + "api/question/" + id;
            this.http.get<Question>(url).subscribe(result => {
                this.question = result;
                this.title = "Edit - " + this.question.text;
            }, error => console.error(error));
        } else {
            this.question.quizId = id;
            this.title  = "Create a new question";
        }
     }
     
     onSubmit(question : Question){
        let url =  `${environment.api_url}` + "api/question";

        if (this.editMode) {
            this.http.post<Question>(url, question).subscribe(result => {
                var v = result;
                console.log("Question " + v.id + "has been updated");
                this.router.navigate(["quiz/edit", v.quizId]);
            }, error => console.error(error));
        } else {
            this.http.put<Question>(url, question).subscribe(result => {
                var v = result;
                console.log("Question " + v.id + "has been created");
                this.router.navigate(["quiz/edit", v.quizId]);
            }, error => console.error(error));            
        }
     }

     onBack(){
         this.router.navigate(["quiz/edit", this.question.quizId]);
     }
}