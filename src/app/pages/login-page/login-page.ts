import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InspoPhoto} from '../../services/inspo-photo';
import {ILoginPageForm} from '../../interfaces/pages/login-page.interface';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {login} from '../../store/auth/auth.actions';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})

export class LoginPage {
  inspoPhotoService: InspoPhoto = inject(InspoPhoto);
  store = inject(Store);
  router = inject(Router);

  form: FormGroup<ILoginPageForm> = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  isPasswordVisible: boolean = false;
  imgSrc: WritableSignal<string> = signal('')
  imgAlt: WritableSignal<string>   = signal('')

  onSubmit (event: Event) {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) return;

    if (this.form.valid) {
      this.store.dispatch(login())
      this.router.navigate(['/tasks'])
    }
  }

  constructor() {
    this.inspoPhotoService.getRandomPhoto().subscribe((value: any) => {
      this.imgSrc = value.photos[0].src.landscape
      this.imgAlt = value.photos[0].alt
    })
  }
}
