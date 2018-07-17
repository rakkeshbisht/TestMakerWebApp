
import { Component, Inject, Input, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { error } from "@angular/compiler/src/util";

@Component({
    selector: "result-list",
    templateUrl: './result-list.component.html',
    styleUrls: ['./result-list.component.css']
})

export class ResultListComponent implements OnChanges {

    @Input() quiz : Quiz;
    results: Result[];
    title: string;

    constructor(private http: HttpClient,
        private router: Router) {
        this.results = [];
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

        let url = `${environment.api_url}` + "api/result/list/" + this.quiz.id;
        this.http.get<Result[]>(url).subscribe(res => {
            this.results = res;
        }, error => console.error(error));
    }

    onCreate() {
        this.router.navigate(["/result/create", this.quiz.id]);
    }

    onEdit(quiz: Quiz) {
        this.router.navigate(["/result/edit", quiz.id]);
    }

    onDelete(result: Result) {
        if (confirm("Do you really want to delete this result?")) {

            let url = `${environment.api_url}` + "api/result/" + this.quiz.id;
            this.http.delete(url).subscribe(res => {
                console.log("Result " + result.id + "has been deleted");

                //refresh the result list
                this.loadData();
            }, error => console.error(error));
        }
    }

}




