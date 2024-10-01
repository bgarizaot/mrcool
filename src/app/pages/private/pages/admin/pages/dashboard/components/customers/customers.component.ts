import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  constructor(private router: Router){}

  onNav = (ev:any) => {
    this.router.navigate(['/admin/clients/details/'+ev]);
  }
}
