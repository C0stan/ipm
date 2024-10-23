// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class ElementService {
//   private elementArray: any[] = [];
// object: Object | undefined;
// constructor(private http: HttpClient) {}
// sendObject(finalObject: Object | undefined) {
//   this.object = finalObject;
// }
// getObject() {
//   return this.object;
// }
// getDataArray() {
//   this.http.getDataArray(this.elementArray);
// }
// addElement(element: any) {
//   this.elements.push(element);
// Notify any subscribers if needed (e.g., using BehaviorSubject)
// }
// data saved in runtime

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  data = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getDataArray(): Observable<any> {
    return this.http.get<any[]>('../assets/data.json');
  }

  getSingleArrayValue(position: number): Observable<any> {
    return this.getDataArray().pipe(
      map((dataArray) =>
        dataArray.find(
          (item: { position: number }) => item.position === position
        )
      )
    );
  }
}
