import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  object: Object | undefined;
  constructor() {}
  sendObject(finalObject: Object | undefined) {
    this.object = finalObject;
  }
  getObject() {
    return this.object;
  }
}
