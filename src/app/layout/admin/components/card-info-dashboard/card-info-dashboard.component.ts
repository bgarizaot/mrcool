import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'cardInfoDashboard',
  templateUrl: './card-info-dashboard.component.html',
  styleUrl: './card-info-dashboard.component.scss',
})
export class CardInfoDashboardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() icon!: string;
}
