import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MaterialModule } from 'src/app/material.module';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
  animations: [fadeInUp]
})
export class LoginComponent {
  authService = inject(AuthService);
  
  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    this.authService.login();
  }
}
