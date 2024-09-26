import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class EmailImgComponent {
    alt;
    src;
    width;
    height;
    style;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailImgComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailImgComponent, isStandalone: true, selector: "app-email-img", inputs: { alt: "alt", src: "src", width: "width", height: "height", style: "style" }, ngImport: i0, template: `
  <img 
    [alt]="alt"
    [src]="src"
    [width]="width"
    [height]="height"
    [ngStyle]="style"
    style="display: block; outline: none; border: none; text-decoration: none;"
  />
`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailImgComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { alt: [{
                type: Input
            }], src: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], style: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailImgComponent };
//# sourceMappingURL=angular-email-img.mjs.map
