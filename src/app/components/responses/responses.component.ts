import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

/**
 * @description
 *  Componente que genera una carta con el contenido de una respuesta
 */

/**
 * @usageNotes
 * 
 * 1. Itera sobre este componente para poder mostrar el listado de respuestas de una pregunta.
 */

@Component({
    selector: 'app-responses',
    standalone: true,
    imports: [],
    templateUrl: './responses.component.html',
    styleUrl: './responses.component.scss'
})
export class ResponsesComponent {

    @Input() username : string = 'test';
    @Input() response : string = 'test';
    @Input() classname : string = '';
}
