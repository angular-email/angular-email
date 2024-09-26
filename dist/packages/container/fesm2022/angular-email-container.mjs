import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class EmailContainerComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailContainerComponent, isStandalone: true, selector: "app-email-container", ngImport: i0, template: `
  <table
    align="center"
    width="100%"
    border="0"
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
  >
    <tbody>
      <tr style="width: 100%;">
        <td>
          <ng-content></ng-content>
        </td>
      </tr>
    </tbody>
  </table>
`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-container',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
  <table
    align="center"
    width="100%"
    border="0"
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
  >
    <tbody>
      <tr style="width: 100%;">
        <td>
          <ng-content></ng-content>
        </td>
      </tr>
    </tbody>
  </table>
`,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailContainerComponent };
//# sourceMappingURL=angular-email-container.mjs.map
