import { Component,Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'answer-edit',
    templateUrl: './answer-edit.component.html',
    styleUrls : ['./answer-edit.component.css']
})

export class AnswerEditComponent{
    title : string;
    answer : Answer;

    editMode: boolean;

    constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private http: HttpClient) {

        this.answer = <Answer>{};

        var id = +this.activatedRoute.snapshot.params["id"];

        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");

        if (this.editMode) {
            let url =  `${environment.api_url}` + "api/answer/" + id;
            this.http.get<Answer>(url).subscribe(result => {
                this.answer = result;
                this.title = "Edit - " + this.answer.text;
            }, error => console.error(error));
        } else {
            this.answer.questionId = id;
            this.title  = "Create a new answer";
        }
     }
     
     onSubmit(answer : Answer){
        let url =  `${environment.api_url}` + "api/answer";

        if (this.editMode) {
            this.http.post<Answer>(url, answer).subscribe(result => {
                var v = result;
                console.log("Answer " + v.id + "has been updated");
                this.router.navigate(["answer/create", v.questionId]);
            }, error => console.error(error));
        } else {
            this.http.put<Answer>(url, answer).subscribe(result => {
                var v = result;
                console.log("Answer " + v.id + "has been created");
                this.router.navigate(["answer/edit", v.questionId]);
            }, error => console.error(error));            
        }
     }

     onBack(){
         this.router.navigate(["answer/edit", this.answer.questionId]);
     }
}