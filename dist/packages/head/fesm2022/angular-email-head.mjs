import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/platform-browser';

class EmailHeadComponent {
    titleService;
    title;
    constructor(titleService) {
        this.titleService = titleService;
        if (this.title) {
            this.titleService.setTitle(this.title);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailHeadComponent, deps: [{ token: i1.Title }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: EmailHeadComponent, isStandalone: true, selector: "app-email-head", inputs: { title: "title" }, ngImport: i0, template: `
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <ng-content></ng-content>
    </head>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: EmailHeadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-email-head',
                    standalone: true,
                    imports: [CommonModule],
                    template: `
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <ng-content></ng-content>
    </head>
  `,
                }]
        }], ctorParameters: () => [{ type: i1.Title }], propDecorators: { title: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { EmailHeadComponent };
//# sourceMappingURL=angular-email-head.mjs.map
