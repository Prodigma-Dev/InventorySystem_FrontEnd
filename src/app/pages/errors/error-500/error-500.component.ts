import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';
import { SearchComponent } from "../../../shared/components/search/search.component";

@Component({
  selector: 'app-error-500',
  imports: [RouterModule, MatCardModule, SearchComponent],
  templateUrl: './error-500.component.html',
  styleUrl: './error-500.component.scss',
  animations: [fadeInUp]
})
export class Error500Component {

}
