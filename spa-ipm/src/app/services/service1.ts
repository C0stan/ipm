// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA } from '../components/table/table.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any[]>('assets/one.json');
  }

  generalGet(): Observable<any> {
    return of(ELEMENT_DATA);
  }

  addData(parameter: any): void {} // add info
}
