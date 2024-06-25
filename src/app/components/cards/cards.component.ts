import { Component } from '@angular/core';
import { Input } from '@angular/core';

/**
 * @description
 * Componente que crear una carta en la aplicacion
 * Este componente muestra una carta con un titulo de valor
 */

/**
 * @usageNotes
 * 
 * 1. Importa este componente para mostrar valores en las cartas
 */
@Component({
    selector: 'app-cards',
    standalone: true,
    imports: [],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent {

    @Input() cardClass: string = 'card-header card-header-first';
    @Input() bodyText: string = 'Usuarios activos: 112';
}
