import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { DataService } from '../../services/service1';

/** @title Simple form field */
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit{
  fieldData: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.fieldData = data;
    });
  }
}