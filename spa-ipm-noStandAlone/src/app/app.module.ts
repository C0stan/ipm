import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { FormComponent } from './components/form/form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddComponent } from './components/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatRadioModule } from '@angular/material/radio';
import {
  ConfigurableFocusTrapFactory,
  FocusTrapFactory,
} from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    AddComponent,
    GridComponent,
    SidenavComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // all Mat
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: FocusTrapFactory, useClass: ConfigurableFocusTrapFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
