import { Component, OnInit } from '@angular/core';
import { ListService } from '@services';
import { ListStore } from "app/store/list/list.store";
import { DataListDef } from '../../services/list/data-list-def';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListStore]
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'tel', 'address'];
  dataList: DataListDef[];

  constructor(private listService: ListService, private listStore: ListStore) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(): void {
    // this.listService.getData().subscribe(ret => {
    //   this.dataList = ret;
    // });

    this.listStore.getListData();

    this.listStore.listData$.subscribe(ret => {
      this.dataList = ret;
    })
  }
}
