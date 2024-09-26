import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class EmailButtonComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailButtonComponent, isStandalone: true, selector: "app-email-button", ngImport: i0, template: `
    <a target="_blank" style="text-decoration: none; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
      <ng-content></ng-content>
    </a>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-button',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <a target="_blank" style="text-decoration: none; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
      <ng-content></ng-content>
    </a>
  `,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailButtonComponent };
//# sourceMappingURL=angular-email-button.mjs.map
