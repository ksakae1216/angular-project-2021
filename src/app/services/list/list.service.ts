import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DATALIST } from '../../mock';
import { DataListDef } from './data-list-def';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  dataList: DataListDef[];

  public getData(): DataListDef[] {
    this.dataList = DATALIST;
    return this.dataList;
  }

  public getListData(): Observable<DataListDef[]> {
    this.dataList = DATALIST;
    return of(this.dataList);
  }
}
