import { Component } from '@angular/core';
import { Input } from '@angular/core';

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
