import { Component, signal, computed, effect, inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Breadcrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  show = signal(true);
  breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });

    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs() {
    const crumbs: Breadcrumb[] = [];
    let route = this.activatedRoute.root;
    let url = '';
    let show = true;

    while (route.firstChild) {
      route = route.firstChild;
      const segment = route.snapshot.url.map((u) => u.path).join('/');
      if (segment) url += `/${segment}`;
      const label = route.snapshot.data['breadcrumb'];
      const showBreadcrumb = route.snapshot.data['showBreadcrumb'];
      if (label && showBreadcrumb !== false) {
        crumbs.push({ label, url });
      }
      if (showBreadcrumb === false) {
        show = false;
      }
    }

    this.breadcrumbs.set(crumbs);
    this.show.set(show);
  }
}
