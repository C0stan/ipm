import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// export class AppComponent implements OnInit{
export class AppComponent {
  title = 'spa-ipm';
  // ngOnInit(): void {
  //   console.log(ELEMENT_DATA)
  // }
}
