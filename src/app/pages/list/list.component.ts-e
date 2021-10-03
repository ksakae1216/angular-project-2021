import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { DataListDef } from '../object/data-list-def';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataList: DataListDef[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    console.info('list component!!');
    this.getDataList();
  }

  getDataList(): void {
    this.dataList = this.listService.getData();
  }
}
