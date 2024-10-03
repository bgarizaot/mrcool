import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'crearProducts',
  templateUrl: './crear-products.component.html',
  styleUrl: './crear-products.component.scss',
})
export class CrearProductsComponent {
  @Input() visible!: boolean;
  @Output() hidden = new EventEmitter();
  @Output() create = new EventEmitter();

  onHidden = () => {
    this.hidden.emit();
  };

  onCreate = () => {
    this.create.emit();
  };
}
