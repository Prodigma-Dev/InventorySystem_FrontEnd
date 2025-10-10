import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';
import { SearchComponent } from "../../../shared/components/search/search.component";

@Component({
  selector: 'app-error-404',
  imports: [RouterModule, MatCardModule, SearchComponent],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
  animations: [fadeInUp]
})
export class Error404Component {

}
