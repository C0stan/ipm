import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../services/service1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  elementName: string = '';
  elementWeight: number | null = null;
  elementSymbol: string = '';

  constructor(private x: ElementService, public router: Router) {}
  // Method to send data when needed (e.g., on form submission)
  sendData() {
    const object = {
      name: this.elementName,
      weight: this.elementWeight,
      symbol: this.elementSymbol,
    };
    // this.x.sendObject(object);
    this.router.navigate(['/form']); // Navigate after sending data
  }
}
