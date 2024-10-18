import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/service1';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  fieldData: any = {};

  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.fieldData = data;
    });
  }

  getUser() {
    this.http.get('http://localhost:4200/table').subscribe((res) => {
      console.log(res);
    });
  }
}
