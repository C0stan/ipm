import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../services/service1';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'table-sample',
  styleUrl: 'table.component.css',
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any[] = [];

  constructor(private x: ElementService) {}
  ngOnInit(): void {
    this.x.getDataArray().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
    });
  }
}

// @Component({
//   selector: 'table-sample',
//   styleUrl: 'table.component.css',
//   templateUrl: 'table.component.html',
// standalone: true,
// imports: [MatTableModule],
// })
// export class TableComponent implements OnInit{
// displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   constructor(x: ElementService){}
//   ngOnInit(): void {
//     this.x.getDataArray()
//   }
// }
