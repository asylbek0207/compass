import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {logout} from '../../store/auth/auth.actions';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  store = inject(Store);
  router = inject(Router);

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
