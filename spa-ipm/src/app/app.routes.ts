import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'table', component: AppComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
    ],
  },
];
