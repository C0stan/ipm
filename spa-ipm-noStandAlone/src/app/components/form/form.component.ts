import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { PeriodicElement } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  elementData: { name: string; weight: number | null; symbol: string } | null =
    null;

  ngOnInit() {
    const storedData = localStorage.getItem('elementData');
    if (storedData) {
      this.elementData = JSON.parse(storedData);
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  saveToTable() {
    const storedData = localStorage.getItem('elementData');
    if (storedData) {
      const newElement: PeriodicElement = JSON.parse(storedData);
      // const newPosition = this.dataSource.length + 1; // Calculate new position
      // newElement.position = newPosition; // Set position
      // this.dataSource.push(newElement); // Add to data source
      console.log(newElement);
    }
  }
}
