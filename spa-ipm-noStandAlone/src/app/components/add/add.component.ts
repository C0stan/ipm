import { Component } from '@angular/core';
import { PeriodicElement } from '../table/table.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  theElement: PeriodicElement = {
    position: 0,
    name: '',
    weight: 0,
    symbol: '',
  };

  addElement(x: PeriodicElement) {
    console.log(x);
  }
}
