import { createReducer, on } from '@ngrx/store';

import * as ListAction from './list.action';

// export function dataListReducer(
//   listState: DataListDef[],
//   action: ListAction
// ): DataListDef {
//   switch (action.type) {
//     case ListActionTypes.ListGetSucess: {
//       return [{ ...listState }];
//     }
//   }
// };
export const initialState = {
  loading: false,
  dataList: []
};

export const reducer = createReducer(
  initialState,
  on(ListAction.getListData, (state) => ({
    loading: false,
    ...state,
  })),
);

