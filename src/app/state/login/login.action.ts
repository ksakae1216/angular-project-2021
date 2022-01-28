import { createAction, props } from '@ngrx/store';

export const doLogin = createAction(
  '[Login] Do Login',
  props<{ loginId: string, password: string }>()
);

export const getLoginState = createAction(
  '[Login] Get Login State',
);

export const setLoginStateSuccess = createAction(
  '[Login] Set Login State Success',
  props<{ isLogin: boolean}>()
);

export const setErrorMessage = createAction(
  '[Login] Set ErrorMessage',
  props<{ errorMessage: string }>()
);
