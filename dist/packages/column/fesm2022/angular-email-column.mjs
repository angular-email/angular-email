import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class EmailColumnComponent {
    style;
    dataId = '__angular-email-column';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailColumnComponent, isStandalone: true, selector: "[app-email-column]", inputs: { style: "style", dataId: "dataId" }, ngImport: i0, template: `
  <td [ngStyle]="style" [attr.data-id]="dataId">
    <ng-content></ng-content>
  </td>
`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailColumnComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[app-email-column]',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
  <td [ngStyle]="style" [attr.data-id]="dataId">
    <ng-content></ng-content>
  </td>
`,
                }]
        }], propDecorators: { style: [{
                type: Input
            }], dataId: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailColumnComponent };
//# sourceMappingURL=angular-email-column.mjs.map
