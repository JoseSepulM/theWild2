import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn : 'root'
})

export class UsuariosService{

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 632fca26-96ef-4bfc-8a35-3f97aeaf8c30'
        })
    }

    private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-json-cc447.appspot.com/o/usuarios.json?alt=media&token=f44c87f7-a346-4cc4-a123-6766ea77e663';

    private lista : any;

    constructor(private http : HttpClient){}

    getJsonData(): Observable<any>{
        return this.http.get(this.jsonUrl);
    }

    MetodoPersona(listaPersonas : any){
        this.http.post(this.jsonUrl, listaPersonas, this.httpOptions).subscribe(
            response => {
                console.log(response);
            },
            error => {
                console.error(`Error ${error}`);
            }
        )
    }



}