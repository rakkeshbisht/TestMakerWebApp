import { Component, Inject, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ActivatedRoute, Router, Route } from "@angular/router";

@Component({
    selector: "quiz",
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
    quiz : Quiz;       

    constructor(private activatedRoute : ActivatedRoute,
        private router: Router,
        private http: HttpClient){
        
        this.quiz = <Quiz>{};
        
        var id =+ this.activatedRoute.snapshot.params["id"];
        console.log(id);

        if (id) {
            let url =  `${environment.api_url}` + 'api/quiz/' + id;                    
    
            this.http.get<Quiz>(url).subscribe(result => {
                this.quiz = result;
            }, error => console.error(error));

        }else{
            console.log("invalid id: routing back home");
            this.router.navigate(["home"]);
        }

    }
    
    onDelete(){
        if (confirm("Do you really want to delete this quiz?")) {
            let url =  `${environment.api_url}` + 'api/quiz/' + this.quiz.id;                    
    
            this.http.delete(url).subscribe(result => {
                console.log("Quiz " + this.quiz.id + " has been deleted");
                this.router.navigate(["home"]);
            }, error => console.error(error));

        }
    }

}




