import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../services/service1';
import { PeriodicElement } from '../table/table.component';
// import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  object: Partial<PeriodicElement> = {}; // Use Partial for optional properties
  // object: any = {
  //   name: '',
  //   weight: null,
  //   symbol: '',
  // };
  constructor(
    private x: ElementService,
    private tableDataService: ElementService
  ) {}

  ngOnInit(): void {
    // this.object = this.x.getObject() || this.object;
    console.log('Data received:', this.object);
  }

  save() {
    if (
      this.object &&
      this.object.name &&
      this.object.weight !== undefined &&
      this.object.symbol
    ) {
      // this.tableDataService.addElement(this.object as PeriodicElement); // Cast to PeriodicElement
    } else {
      console.error('Object is missing required properties');
    }
  }
}
