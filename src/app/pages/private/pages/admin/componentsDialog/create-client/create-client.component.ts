import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'createClientMod',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss',
})
export class CreateClientComponent {
  @Input() visible!: boolean;
  @Output() hidden = new EventEmitter();

  showCrearProduc: boolean = false;
  objProduct: any = [];

  onHidden = () => {
    this.hidden.emit();
  };

  onCreateProduct = () => {
    this.showCrearProduc = false;
    this.objProduct = [
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
      {
        marca: 'Marca',
        modelo: 'Modelo',
        area: 'Área',
        capacidad: 'Capacidad',
      },
    ];
  };
}
