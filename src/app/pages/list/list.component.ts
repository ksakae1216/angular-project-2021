import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ListService } from '@services';
import { DataListDef } from '../../services/list/data-list-def';
import * as ListAction from '../../store/list/list.action';
import * as ListSelector from '../../store/list/list.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'tel', 'address'];
  dataList: DataListDef[];


  constructor(private listService: ListService, private store: Store) { }

  dataList$ = this.store.pipe(select(ListSelector.getDataList));

  ngOnInit() {
    this.getDataList();
    this.getListData();
  }

  getDataList(): void {
    this.dataList = this.listService.getData();
  }

  getListData(): void {
    this.store.dispatch(ListAction.getListData());
    this.dataList$.subscribe(ret => {
      console.log('ret -> ', ret);
    });
  }
}
