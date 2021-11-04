import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName } from './list.state';

const getListDataState = createFeatureSelector<State>(featureName);
export const getLoading = createSelector(getListDataState, state => state.loading);
export const getDataList = createSelector(getListDataState, state => state.dataList);
