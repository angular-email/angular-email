import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

class EmailHtmlComponent {
    lang = 'en';
    dir = 'ltr';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailHtmlComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailHtmlComponent, isStandalone: true, selector: "app-email-html", inputs: { lang: "lang", dir: "dir" }, ngImport: i0, template: `
    <html  xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" 
    [attr.lang]="lang" [attr.dir]="dir">
      <ng-content></ng-content>
    </html>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailHtmlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-html',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <html  xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" 
    [attr.lang]="lang" [attr.dir]="dir">
      <ng-content></ng-content>
    </html>
  `,
                }]
        }], propDecorators: { lang: [{
                type: Input
            }], dir: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailHtmlComponent };
//# sourceMappingURL=angular-email-html.mjs.map
