import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PaginatorIntlExampleComponent } from "./paginator-intl-example/paginator-intl-example.component";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  imports: [MatCardModule, PaginatorIntlExampleComponent],
})
export class PaginatorComponent {}
