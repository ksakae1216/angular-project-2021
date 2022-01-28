import { createReducer, on } from '@ngrx/store';
import { setLoginStateSuccess, setErrorMessage } from '../login/login.action';

export interface LoginModel {
  isLogin: boolean;
  errorMessage?: string;
}

export const initialState: LoginModel = { isLogin: false };

export const loginReducer = createReducer(
  initialState,
  on(setLoginStateSuccess, (state, { isLogin }) => {
    return ({...state, isLogin });
  }),
  on(setErrorMessage, (state, { errorMessage }) => {
    return ({ ...state, errorMessage });
  }),
);
