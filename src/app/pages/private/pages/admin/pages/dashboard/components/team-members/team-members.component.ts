import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teamMembers',
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {

  constructor(private router: Router){}

  onNav = (ev:any) => {
    this.router.navigate(['/admin/employees/details/'+ev]);
  }
}
