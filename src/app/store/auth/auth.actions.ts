import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');
export const reset = createAction('[Counter] Reset');
export const setCounter = createAction(
  '[Counter] Set Counter',
  props<{ value: number }>()
);
