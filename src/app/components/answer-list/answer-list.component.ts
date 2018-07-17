
import { Component, Inject, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { error } from "@angular/compiler/src/util";

@Component({
    selector: "answer-list",
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.css']
})

export class AnswerListComponent implements OnChanges {

    @Input() question: Question;
    answers: Answer[];
    title: string;

    constructor(private http: HttpClient,
        private router: Router) {
        this.answers = [];
    }

    ngOnChanges(changes: SimpleChanges) {

        if (typeof changes['question'] != "undefined") {

            //retrieve the question variable change info
            var change = changes['question'];
            //only perform the task if the value has been changed
            if (!change.isFirstChange()) {
                this.loadData();
            }
        }
    }

    loadData() {

        let url = `${environment.api_url}` + "api/question/list/" + this.question.id;
        this.http.get<Answer[]>(url).subscribe(res => {
            this.answers = res;
        }, error => console.error(error));
    }

    onCreate() {
        this.router.navigate(["/answer/create", this.question.id]);
    }

    onEdit(answer: Answer) {
        this.router.navigate(["/answer/edit", answer.id]);
    }

    onDelete(answer: Answer) {
        if (confirm("Do you really want to delete this answer?")) {

            let url = `${environment.api_url}` + "api/answer/" + this.question.id;
            this.http.delete(url).subscribe(res => {
                console.log("Answer " + answer.id + "has been deleted");

                //refresh the answer list
                this.loadData();
            }, error => console.error(error));
        }
    }

}




