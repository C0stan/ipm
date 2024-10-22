import { Injectable } from '@angular/core';
import { PeriodicElement } from '../components/table/table.component';
import { ELEMENT_DATA } from '../components/table/table.component';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private elements: PeriodicElement[] = ELEMENT_DATA;
  object: Object | undefined;
  constructor() {}
  sendObject(finalObject: Object | undefined) {
    this.object = finalObject;
  }
  getObject() {
    return this.object;
  }
  getArray() {
    return this.elements;
  }
  addElement(element: PeriodicElement) {
    this.elements.push(element);
    // Notify any subscribers if needed (e.g., using BehaviorSubject)
  }
}
// data saved in runtime
