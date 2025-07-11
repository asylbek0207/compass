import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IAuthState} from '../../interfaces/store/auth.interface';

export const selectAuthState = createFeatureSelector<IAuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  state => state.isLoggedIn
)
