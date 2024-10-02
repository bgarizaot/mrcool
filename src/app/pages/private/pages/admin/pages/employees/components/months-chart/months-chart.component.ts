import { Component } from '@angular/core';

@Component({
  selector: 'monthsChartEmployee',
  templateUrl: './months-chart.component.html',
  styleUrl: './months-chart.component.scss',
})
export class MonthsChartComponent {
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    this.basicData = {
      labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
      datasets: [
        {
          label: 'Ordenes trabajadas',
          data: [10, 5, 8, 3, 7],
          backgroundColor: ['rgba(54, 162, 235, 0.8)'],
          borderColor: ['rgb(54, 162, 235)'],
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
