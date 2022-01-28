import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectFeature = createFeatureSelector<{ isLogin: false, errorMessage: string }>('LoginState');

export const getIsLogin = createSelector(
  selectFeature,
  (state: { isLogin: false }) => state.isLogin
);

export const getErrorMessage = createSelector(
  selectFeature,
  (state) => state.errorMessage
);
