import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardsComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
