import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class QuestionService{
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 0e1eb372-ca9e-4db3-a652-f3a3b32e0372'
        })
    }

    private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-json-cc447.appspot.com/o/questions.json?alt=media&token=0e1eb372-ca9e-4db3-a652-f3a3b32e0372';
    private lista : any;

    constructor(private http : HttpClient){}

    getJsonData(): Observable<any>{
        return this.http.get(this.jsonUrl);
    }

    MetodoQuestion(listaPreguntas : any){
        this.http.post(this.jsonUrl, listaPreguntas, this.httpOptions).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.error(`Error ${error}`);
            }
        )
    }
}