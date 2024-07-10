import { Component } from '@angular/core';

@Component({
  selector: 'stateOrders',
  templateUrl: './state-orders.component.html',
  styleUrl: './state-orders.component.scss',
})
export class StateOrdersComponent {
  basicData: any;

  basicOptions: any;

  ngOnInit() {
    this.basicData = {
      labels: ['Nuevo', 'Proceso', 'Terminado'],
      datasets: [
        {
          label: 'Ordenes',
          data: [540, 325, 702, 620],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          display: true,
          title: {
            display: true,
            text: 'Julio',
            font: {
              size: 20,
            },
          },
        },
      },
    };
  }
}
