import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  elementName: string = '';
  elementWeight: number | null = null;
  elementSymbol: string = '';

  saveAndPopulate() {
    const elementData = {
      name: this.elementName,
      weight: this.elementWeight,
      symbol: this.elementSymbol,
    };

    // Save to local storage
    localStorage.setItem('elementData', JSON.stringify(elementData));
  }
}
