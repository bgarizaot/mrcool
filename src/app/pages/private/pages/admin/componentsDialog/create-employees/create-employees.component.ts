import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'createEmployees',
  templateUrl: './create-employees.component.html',
  styleUrl: './create-employees.component.scss'
})
export class CreateEmployeesComponent {
  @Input() visible!: boolean;
  @Output() hidden = new EventEmitter();

  onHidden = () => {
    this.hidden.emit();
  };
}
