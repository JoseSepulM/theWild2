import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


/**
 * @description
 * Componente que crea un grafico demostrativo
 * Este componente muestra una grafico con valores demostrativos en barras
 */

/**
 * @usageNotes
 * 
 * 1. Importa este componente para mostrar valores a travez de un grafico
 */

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

    public chart: any;

    constructor(){}

    ngOnInit(): void {
        this.createChart();
    }
    
    createChart():void{
  
        this.chart = new Chart("MyChart", {
            type: 'bar',
            data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
                    label: 'Consultas por mes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    

}
