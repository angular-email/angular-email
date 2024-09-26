import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';

class EmailBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailBodyComponent, isStandalone: true, selector: "app-email-body", ngImport: i0, template: `
      <body>
        <ng-content></ng-content>
      </body>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailBodyComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-body',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
      <body>
        <ng-content></ng-content>
      </body>
  `,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailBodyComponent };
//# sourceMappingURL=angular-email-body.mjs.map
