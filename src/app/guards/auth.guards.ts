import {inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectIsLoggedIn} from '../store/auth/auth.selector';
import {Router} from '@angular/router';

export const canActivateAuth = () => {
  const store = inject(Store);

  const isLoggedIn = store.select(selectIsLoggedIn);

  console.log('store', store);
  console.log('isLoggedIn', isLoggedIn);


  if (isLoggedIn) return true;

  return inject(Router).createUrlTree(['/login']);
}
