import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-branding',
    imports: [RouterModule],
    template: `
    <div class="branding">
      <a [routerLink]="['/']">
        <img
          src="./assets/images/logos/indigo-light-logo.png"
          class="align-middle m-l-6"
          alt="logo"
          height="35px"
        />
      </a>
    </div>
  `
})
export class BrandingComponent {
  constructor() {}
}
