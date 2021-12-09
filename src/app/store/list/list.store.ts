import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ListService } from '@services';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

export interface ListState {
  id: number;
  name: string;
  tel: string;
  address: string;
}

@Injectable()
export class ListStore extends ComponentStore<ListState[]> {
  constructor(private listService: ListService) {
    super();
  }

  readonly listData$: Observable<ListState[]> = this.select(state => state);

  readonly getListData =  this.effect((dummy$: Observable<void>) => {
    return dummy$.pipe(
      switchMap(() => this.listService.getData().pipe(
        tap({
          next: ret => this.setState(ret),
        }),
        catchError(() => {
          alert('500 Error');
          return of(null);
        }),
      )),
    );
  });

}
