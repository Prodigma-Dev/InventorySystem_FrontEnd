import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-horizontal-nav-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule,
  ],
  templateUrl: './horizontal-nav-item.component.html',
})
export class HorizontalNavItemComponent {
  @Input() menuItem: any;
  @Input() isChild: boolean = false;
  isOpen = false;
  readonly router = inject(Router);
  readonly navService = inject(NavService);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  redirectMenu(menu: string) {
    console.log(menu)
    this.router.navigate([menu]);
  }

}
