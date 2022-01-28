import { createReducer, on } from '@ngrx/store';
import { getLoginState, setLoginStateSuccess, setErrorMessage } from '../login/login.action';

export interface LoginModel {
  isLogin: boolean;
  errorMessage?: string;
}

export const initialState: LoginModel = { isLogin: false };

export const loginReducer = createReducer(
  initialState,
  on(getLoginState, state => {
    console.log('# called reducer: State isLogin -> ', state);
    return ({...state});
  }),
  on(setLoginStateSuccess, (state, { isLogin }) => {
    console.log('# called reducer: Success isLogin -> ', isLogin);
    return ({...state, isLogin });
  }),
  on(setErrorMessage, (state, { errorMessage }) => {
    return ({ ...state, errorMessage });
  }),
);
