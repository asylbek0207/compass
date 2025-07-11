import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import { reset, setCounter, login, logout} from './auth.actions';

export const authReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(logout, state => ({ ...state, isLoading: false })),
  on(reset, state => ({ ...state, count: 0 })),
  on(setCounter, (state, { value }) => ({ ...state, count: value }))
);
