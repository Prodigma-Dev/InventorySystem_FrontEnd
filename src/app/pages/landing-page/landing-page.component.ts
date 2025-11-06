import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isExpanded = false;

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  goToLastProjects() {
    this.router.navigate(['/dashboard/our-last-projects']);
  }

  goToNextShots() {
    this.router.navigate(['/dashboard/next-shots']);
  }

  goToNotInOffice() {
    this.router.navigate(['/dashboard/not-in-office']);
  }

  onIconClick() {
    const shootingIconContainer = this.el.nativeElement.querySelector('.shooting-icon-container');
    const equipmentIconContainer = this.el.nativeElement.querySelector('.equipment-icon-container');
    const accountIconContainer = this.el.nativeElement.querySelector('.account-icon-container');
    const addIcon = this.el.nativeElement.querySelector('.add-icon');

    if (this.isExpanded) {
      this.renderer.setStyle(shootingIconContainer, 'bottom', '192px');
      this.renderer.setStyle(equipmentIconContainer, 'bottom', '192px');
      this.renderer.setStyle(accountIconContainer, 'bottom', '192px');
      this.renderer.setStyle(addIcon, 'rotate', '45deg');
      this.isExpanded = false;
    } else {
      this.renderer.setStyle(shootingIconContainer, 'bottom', '392px');
      this.renderer.setStyle(equipmentIconContainer, 'bottom', '332px');
      this.renderer.setStyle(accountIconContainer, 'bottom', '262px');
      this.renderer.setStyle(addIcon, 'rotate', '90deg');
      this.isExpanded = true;
    }
  }

  addShooting() {
    this.router.navigate(['/dashboard/next-shots/add']);
  }

  equipmentRental() {
    this.router.navigate(['/dashboard/equipment-rental']);
  }

  userAccount() {
    this.router.navigate(['/dashboard/user-account', 1]);
  }
}
