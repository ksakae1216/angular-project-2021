import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DataListDef } from './data-list-def';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
  ) { }

  dataList: DataListDef[];

  public getData(): Observable<DataListDef[]> {
    return this.http.get<DataListDef[]>(`/api/user-info-list`);
  }
}
