
import { Component, Inject, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { error } from "@angular/compiler/src/util";

@Component({
    selector: "question-list",
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnChanges {

    @Input() quiz: Quiz;
    questions: Question[];
    title: string;

    constructor(private http: HttpClient,
        private router: Router) {
        this.questions = [];
    }

    ngOnChanges(changes: SimpleChanges) {

        if (typeof changes['quiz'] != "undefined") {

            //retrieve the quiz variable change info
            var change = changes['quiz'];
            //only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                this.loadData();
            }
        }
    }

    loadData() {

        let url = `${environment.api_url}` + "api/question/list/" + this.quiz.id;
        this.http.get<Question[]>(url).subscribe(res => {
            this.questions = res;
        }, error => console.error(error));
    }

    onCreate() {
        this.router.navigate(["/question/create", this.quiz.id]);
    }

    onEdit(question: Question) {
        this.router.navigate(["/question/edit", question.id]);
    }

    onDelete(question: Question) {
        if (confirm("Do you really want to delete this question?")) {

            let url = `${environment.api_url}` + "api/question/" + this.quiz.id;
            this.http.delete(url).subscribe(res => {
                console.log("Question " + question.id + "has been deleted");

                //refresh the question list
                this.loadData();
            }, error => console.error(error));
        }
    }

}




