import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    {path: '', component: TableComponent},
    {path: 'form', component: FormComponent}
];
