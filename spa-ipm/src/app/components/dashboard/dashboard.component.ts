import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TestService } from '../../services/test.service';
import { MatButtonModule } from '@angular/material/button';

/** @title Basic drawer */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterModule,
    TableComponent,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showFiller = false;
  constructor(private testService: TestService) {}
  fetch1() {
    this.testService.fetch().subscribe((data) => console.log(data));
  }
}
