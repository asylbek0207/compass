import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);
  form = new FormGroup({
    lastName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  })

  onSubmit(event: Event) {
    if (this.form.valid) {
      this.router.navigate(['/login']);
    }
  }
}
