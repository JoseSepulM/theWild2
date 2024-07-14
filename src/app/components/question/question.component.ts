import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

/**
 * @description
 *  Componente que genera una carta con el contenido de una pregunta
 */

/**
 * @usageNotes
 * 
 * 1. Itera sobre este componente para poder mostrar el listado de preguntas.
 */

@Component({
    selector: 'app-question',
    standalone: true,
    imports: [],
    templateUrl: './question.component.html',
    styleUrl: './question.component.scss'
})
export class QuestionComponent {

    @Input() titleQuestion: string = 'Test';
    @Input() textQuestion: string = 'Test';
    @Output() questionClicked = new EventEmitter<void>();

    onQuestionClick() {
        this.questionClicked.emit();
    }

}
