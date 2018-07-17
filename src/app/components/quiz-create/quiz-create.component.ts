import { Component, Inject, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ActivatedRoute, Router, Route } from "@angular/router";

@Component({
    selector: "quiz-create",
    templateUrl: './quiz-create.component.html',
    styleUrls: ['./quiz-create.component.css']
})

export class QuizCreateComponent {
    title: string;
    quiz : Quiz;       

    // true if editing a existing quiz
    // false if creating a new one
    editMode: boolean;

    constructor(private activatedRoute : ActivatedRoute,
        private router: Router,
        private http: HttpClient){
        
        this.quiz = <Quiz>{};
        
        var id =+ this.activatedRoute.snapshot.params["id"];
        console.log(id);

        if (id) {                
            this.editMode = true;    
            let url =  `${environment.api_url}` + 'api/quiz/' + id;                    
    
            this.http.get<Quiz>(url).subscribe(result => {
                this.quiz = result;
            }, error => console.error(error));
        }else{
            
            this.title = "Create a new Quiz";                        
        }
    }
    
    onSubmit(quiz : Quiz){
        let url =  `${environment.api_url}` + 'api/quiz/';
        
        if (this.editMode) {
            this.http.put<Quiz>(url, quiz).subscribe(result =>{
                let v = result;
                console.log("Quiz " + v.id + " has been created");
                this.router.navigate(["home"]);
            }, error => console.log(error));            
        }else{
            this.http.post<Quiz>(url, quiz).subscribe(result =>{
                let v = result;
                console.log("Quiz " + v.id + " has been updated");
                this.router.navigate(["home"]);
            }, error => console.log(error));                 
        }
    }

    onBack(){
        this.router.navigate(["home"]);
    }

}




