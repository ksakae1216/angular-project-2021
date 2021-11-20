import { Component, OnInit } from '@angular/core';
import { ListService } from '@services';
import { DataListDef } from '../../services/list/data-list-def';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'tel', 'address'];
  dataList: DataListDef[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList(): void {
    this.listService.getData().subscribe(ret => {
      this.dataList = ret;
    });
  }
}
