import { Component } from '@angular/core';

@Component({
  selector: 'monthsChart',
  templateUrl: './months-chart.component.html',
  styleUrl: './months-chart.component.scss',
})
export class MonthsChartComponent {
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    this.basicData = {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      datasets: [
        {
          label: 'Revision',
          data: [540, 325, 702, 620, 420, 320, 200, 100, 50, 25, 10, 5],
          backgroundColor: ['rgba(54, 162, 235, 0.8)'],
          borderColor: ['rgb(54, 162, 235)'],
          borderWidth: 1,
        },
        {
          label: 'Mantenimiento',
          data: [325, 540, 702, 620, 420, 320, 200, 100, 50, 25, 10, 5],
          backgroundColor: ['rgba(108, 117, 125, 0.8)'],
          borderColor: ['rgb(108, 117, 125)'],
          borderWidth: 1,
        },
        {
          label: 'Reparacion',
          data: [325, 540, 420, 320, 200, 100, 50,702, 620,  25, 10, 5],
          backgroundColor: ['rgba(25,135,84, 0.8)'],
          borderColor: ['rgb(25,135,84)'],
          borderWidth: 1,
        },
        {
          label: 'Instalacion',
          data: [325, 540, 702, 620, 200, 100, 50,420, 320, 25, 10, 5],
          backgroundColor: ['rgba(255, 193, 7, 0.8)'],
          borderColor: ['rgb(255, 193, 7)'],
          borderWidth: 1,
        },
        {
          label: 'Otros',
          data: [325, 620, 420, 320, 200, 540, 702, 100, 50, 25, 10, 5],
          backgroundColor: ['rgba(220, 53, 69, 0.8)'],
          borderColor: ['rgb(220, 53, 69)'],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      indexAxis: 'x',
      plugins: {},
      scales: {},
    };
  }
}
