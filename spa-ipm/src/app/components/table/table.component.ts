import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  goTo: any;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', goTo: '' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', goTo: '' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', goTo: '' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', goTo: '' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', goTo: '' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', goTo: '' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', goTo: '' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', goTo: '' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', goTo: '' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', goTo: '' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'goTo'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) {}

  goToElement(element: PeriodicElement) {
    this.router.navigate(['/element', element.position]); // Navigate to detail page with position as param
  }
}
