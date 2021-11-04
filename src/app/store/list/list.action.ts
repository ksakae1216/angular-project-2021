import { createAction, props } from '@ngrx/store';
import { DataListDef } from '../../services/list/data-list-def';

export enum ListActionTypes {
  ListGet = '[List] Get',
  ListGetSucess = '[List] Get Success',
  ListGetFail = '[List] Get Fail',
}

export const getListData = createAction(ListActionTypes.ListGet);

export const getListDataSuccess = createAction(
  ListActionTypes.ListGetSucess,
  props<{ listData: DataListDef[] }>()
);

export const getListDataFail = createAction(
  ListActionTypes.ListGetFail,
  props<{ error: any }>()
);
