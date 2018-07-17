import { Component, Inject, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
    selector: "quiz-list",
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.css']
})

export class QuizListComponent implements OnInit {

    @Input() class: string;
    title: string;
    selectedQuiz: Quiz;
    quizList: Quiz[]; 
    
    ngOnInit(): void {
        let url =  `${environment.api_url}`;         
        switch (this.class) {
            case 'latest': 
            default:
                this.title = "Latest Quiz List";  
                url += 'api/quiz/LatestQuizList/10';
                break;        
            case 'byTitle':                 
                this.title = "Quiz List by Title";  
                url += 'api/quiz/ByTitle/';
                break;
        }

        this.http.get<Quiz[]>(url).subscribe(result => {
            this.quizList = result;
        }, error => console.error(error));
        
    }       

    constructor(private http: HttpClient,
        private router: Router) {         
    }

    onselect(quiz: Quiz) {
        this.selectedQuiz = quiz;
        console.log("quiz with id " + this.selectedQuiz + "has been selected");
        this.router.navigate(["quiz",this.selectedQuiz.id]);
    }
}




