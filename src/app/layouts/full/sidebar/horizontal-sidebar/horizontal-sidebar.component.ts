import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalNavItemComponent } from './horizontal-nav-item/horizontal-nav-item.component';
import { navItems } from '../sidebar-data';
import { NavItem } from '../nav-item';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { NavService } from 'src/app/core/services/nav.service';

@Component({
  selector: 'app-horizontal-sidebar',
  standalone: true,
  imports: [CommonModule, HorizontalNavItemComponent],
  templateUrl: './horizontal-sidebar.component.html',
})
export class HorizontalSidebarComponent {
  navItems = navItems;
  readonly navService = inject(NavService);
  private readonly router = inject(Router);
  
  matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'exact',
    fragment: 'ignored',
    matrixParams: 'ignored',
  };
  isActive(item: NavItem): boolean {
    if (item.route && this.router.isActive(item.route, this.matchOptions)) {
      return true;
    }

    if (item.children) {
      for (let child of item.children) {
        if (this.isActive(child)) {
          return true;
        }
      }
    }

    return false;
  }
}
