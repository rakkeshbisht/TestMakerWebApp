import { Component,Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'result-edit',
    templateUrl: './result-edit.component.html',
    styleUrls : ['./result-edit.component.css']
})

export class ResultEditComponent{
    title : string;
    result : Result;

    editMode: boolean;

    constructor(private activatedRoute : ActivatedRoute,
    private router: Router,
    private http: HttpClient) {

        this.result = <Result>{};

        var id = +this.activatedRoute.snapshot.params["id"];

        this.editMode = (this.activatedRoute.snapshot.url[1].path === "edit");

        if (this.editMode) {
            let url =  `${environment.api_url}` + "api/question/" + id;
            this.http.get<Result>(url).subscribe(result => {
                this.result = result;
                this.title = "Edit - " + this.result.text;
            }, error => console.error(error));
        } else {
            this.result.quizId = id;
            this.title  = "Create a new result";
        }
     }
     
     onSubmit(result : Result){
        let url =  `${environment.api_url}` + "api/result";

        if (this.editMode) {
            this.http.post<Result>(url, result).subscribe(result => {
                var v = result;
                console.log("Result " + v.id + "has been updated");
                this.router.navigate(["result/create", v.quizId]);
            }, error => console.error(error));
        } else {
            this.http.put<Result>(url, result).subscribe(result => {
                var v = result;
                console.log("Result " + v.id + "has been created");
                this.router.navigate(["result/edit", v.quizId]);
            }, error => console.error(error));            
        }
     }

     onBack(){
         this.router.navigate(["result/edit", this.result.quizId]);
     }
}