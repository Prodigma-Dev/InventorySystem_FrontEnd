import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { fadeInLeft } from 'src/app/shared/animations/fade-in-left.animation';

@Component({
  selector: 'app-coming-soon',
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
  animations: [fadeInLeft]
})
export class ComingSoonComponent {
  constructor(private router: Router) { }

  form = new FormGroup({
    email: new FormControl(''),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.router.navigate(['/']);
  }
}
