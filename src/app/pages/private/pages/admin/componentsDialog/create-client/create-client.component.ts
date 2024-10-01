import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'createClientMod',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss',
})
export class CreateClientComponent {
  @Input() visible!: boolean;
  @Output() hidden = new EventEmitter();

  onHidden = () => {
    this.hidden.emit();
  };
}
