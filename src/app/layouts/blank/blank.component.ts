import { Component } from '@angular/core';


import { RouterOutlet } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: [],
    imports: [RouterOutlet, MaterialModule]
})
export class BlankComponent {
  constructor() {}
}
