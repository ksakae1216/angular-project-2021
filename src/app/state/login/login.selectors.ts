import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectFeature = createFeatureSelector<{ isLogin: boolean, errorMessage: string }>('LoginState');

export const getIsLogin = createSelector(
  selectFeature,
  (state) => state.isLogin
);

export const getErrorMessage = createSelector(
  selectFeature,
  (state) => state.errorMessage
);
