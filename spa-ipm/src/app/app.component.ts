import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TestService } from './services/test.service';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    MainNavComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// export class AppComponent implements OnInit{
export class AppComponent {
  title = 'spa-ipm';
  constructor(private testService: TestService) {}
  fetch1() {
    this.testService.fetch().subscribe((data) => console.log(data));
  }
  // ngOnInit(): void {
  //   console.log(ELEMENT_DATA)
  // }
}
