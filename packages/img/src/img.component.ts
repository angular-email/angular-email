import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-img',
  standalone: true,
  imports: [CommonModule],
  template: `
  <img 
    [alt]="alt"
    [src]="src"
    [width]="width"
    [height]="height"
    [ngStyle]="style"
    style="display: block; outline: none; border: none; text-decoration: none;"
  />
`,
})
export class EmailImgComponent {
  @Input() alt?: string;
  @Input() src?: string;
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() style?: { [key: string]: string | number };
}
