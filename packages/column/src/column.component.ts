import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-email-column]',
  standalone: true,
  imports: [CommonModule],
  template: `
  <td [ngStyle]="style" [attr.data-id]="dataId">
    <ng-content></ng-content>
  </td>
`,
})

export class EmailColumnComponent {
  @Input() style?: { [key: string]: any };
  @Input() dataId: string = '__angular-email-column';
}
