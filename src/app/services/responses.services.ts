import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class ResponseService{

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 3dc9d3ec-732a-400b-b1d8-de79ed6af466'
        })
    }

    private jsonUrl = '/api/v0/b/angular-json-cc447.appspot.com/o/responses.json?alt=media&token=3dc9d3ec-732a-400b-b1d8-de79ed6af466';
    private lista : any;

    constructor(private http : HttpClient){}

    getJsonData(): Observable<any>{
        return this.http.get(this.jsonUrl);
    }

    MetodoResponse(listaRespuestas : any){
        this.http.post(this.jsonUrl, listaRespuestas, this.httpOptions).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.error(`Error ${error}`);
            }
        )
    }

}