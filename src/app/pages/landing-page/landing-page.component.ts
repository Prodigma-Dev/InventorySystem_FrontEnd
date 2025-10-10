import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  goToLastProjects() {
    this.router.navigate(['/dashboard/our-last-projects']);
  }

  goToNextShots() {
    this.router.navigate(['/dashboard/next-shots']);
  }

  goToNotInOffice() {
    this.router.navigate(['/dashboard/not-in-office']);
  }
}
