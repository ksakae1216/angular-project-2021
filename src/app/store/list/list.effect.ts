import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { ListService } from '../../services/list/list.service';
import * as ListAction from './list.action';

@Injectable()
export class ListEffects {

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListAction.getListData),
      switchMap(() => {
        console.log('### called');
        return this.listService.getListData().pipe(
          map((result) => {
            console.log('result => ', result);
            return ListAction.getListDataSuccess({listData: result});
          }),
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private listService: ListService,
  ) {}
}
