import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  // { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
