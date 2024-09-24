import { Component, Input, ElementRef, Renderer2 } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-text',
  standalone: true,
  imports: [CommonModule],
  template: `<p [ngStyle]="computedStyles" [attr.id]="id" [attr.class]="class" [attr.style]="style">
               <ng-content></ng-content>
             </p>`,
})
export class EmailTextComponent {
  @Input() style: { [key: string]: string } = {};
  @Input() id?: string;
  @Input() class?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  get computedStyles() {
    return {
      fontSize: '14px',
      lineHeight: '24px',
      margin: '16px 0',
      ...this.style,
    };
  }
}
