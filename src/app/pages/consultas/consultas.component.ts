import { Component } from '@angular/core';
import { NavbarContentUserComponent } from '../../components/navbar-content-user/navbar-content-user.component';
import { QuestionComponent } from '../../components/question/question.component';
import { ResponsesComponent } from '../../components/responses/responses.component';
import { QuestionService } from '../../services/questions.services';
import { ResponseService } from '../../services/responses.services';
import { OnInit,ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-consultas',
    standalone: true,
    imports: [
        NavbarContentUserComponent, 
        QuestionComponent, 
        HttpClientModule, 
        CommonModule,
        ResponsesComponent,
        FormsModule
    ],
    templateUrl: './consultas.component.html',
    styleUrl: './consultas.component.scss',
    providers: [QuestionService, ResponseService]
})
export class ConsultasComponent implements OnInit {


    questions : any[] = [];
    tituloPregunta : string = '';
    textoPregunta : string = '';
    responses : any[] = [];
    responsesQuestion : any[] = [];
    idQuestion : Number = 0;
    showModal : boolean = false;

    @ViewChild('input_response', { static: true }) input_response!: ElementRef;


    constructor( 
        private questionService : QuestionService,
        private responseService : ResponseService
    ){}

    getClassName(username: string): string {
        return username === localStorage.getItem('userSession') ? 'justify-content-end' : 'justify-content-start';
    }


    ngOnInit(): void {

        this.questionService.getJsonData().subscribe(data => {
            this.questions = data;
        })

        this.responseService.getJsonData().subscribe(data => {
            this.responses = data;
        })
    }

    agregarPregunta() : void {
        this.showModal = true;
    }

    hideModal() : void {
        this.showModal = false;
    }

    submitFormAdd() : void {
        let id = this.questions.length + 1;
        const nuevaPersona = {
            idQuestion : id,
            username: localStorage.getItem('userSession'),
            title: this.tituloPregunta,
            text: this.textoPregunta
        };

        this.questions.push(nuevaPersona);
        this.questionService.MetodoQuestion(this.questions);
        this.hideModal();
    }

    handleQuestionClick(idQuestion: number) {

        this.idQuestion = idQuestion;
        this.responsesQuestion = this.responses.filter((element) => element.idQuestion == idQuestion);
    }

    sendResponse() : Boolean{
        if(this.idQuestion == 0){ alert("debes seleccionar una pregunta"); return false}
        let id = this.responses.length + 1;
        const response = this.input_response.nativeElement.value;
        if(response != ""){
            const newResponse = {
                "idResponse" : id,
                "idQuestion" : this.idQuestion,
                "username" : localStorage.getItem('userSession'),
                "response" : response
            };

            this.responses.push(newResponse);
            this.responsesQuestion.push(newResponse);
            this.responseService.MetodoResponse(this.responses);
            this.input_response.nativeElement.value = '';
        }
        else{
            alert('Debe proporcionar un mensaje');
        }

        return true;
     




    }

}
