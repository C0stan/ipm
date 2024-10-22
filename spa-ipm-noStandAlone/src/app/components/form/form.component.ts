import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../services/service1';
// import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  object: any = {
    name: '',
    weight: null,
    symbol: '',
  };
  constructor(private x: ElementService) {}

  ngOnInit(): void {
    this.object = this.x.getObject() || this.object;
    console.log('Data received:', this.object);
  }

  save() {}
}
