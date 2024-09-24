import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-html',
  standalone: true,
  imports: [CommonModule],
  template: `
    <html  xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" 
    [attr.lang]="lang" [attr.dir]="dir">
      <ng-content></ng-content>
    </html>
  `,
})
export class EmailHtmlComponent {
  @Input() lang: string = 'en';
  @Input() dir: string = 'ltr';
}
