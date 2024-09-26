import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class EmailTextComponent {
    el;
    renderer;
    style = {};
    id;
    class;
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    get computedStyles() {
        return {
            fontSize: '14px',
            lineHeight: '24px',
            margin: '16px 0',
            ...this.style,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailTextComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailTextComponent, isStandalone: true, selector: "app-email-text", inputs: { style: "style", id: "id", class: "class" }, ngImport: i0, template: `<p [ngStyle]="computedStyles" [attr.id]="id" [attr.class]="class" [attr.style]="style">
               <ng-content></ng-content>
             </p>`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-text',
                    standalone: true,
                    imports: [CommonModule],
                    template: `<p [ngStyle]="computedStyles" [attr.id]="id" [attr.class]="class" [attr.style]="style">
               <ng-content></ng-content>
             </p>`,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { style: [{
                type: Input
            }], id: [{
                type: Input
            }], class: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailTextComponent };
//# sourceMappingURL=angular-email-text.mjs.map
