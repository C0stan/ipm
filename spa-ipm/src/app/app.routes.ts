import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, children: [
        {path: 'form', component: FormComponent},
        {path: 'table', component: TableComponent},
        {path: '', redirectTo: 'table', pathMatch: 'full'},
    ]},
    
];
