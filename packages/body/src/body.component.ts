import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-body',
  standalone: true,
  imports: [CommonModule],
  template: `
      <body>
        <ng-content></ng-content>
      </body>
  `,
})

export class EmailBodyComponent { }
