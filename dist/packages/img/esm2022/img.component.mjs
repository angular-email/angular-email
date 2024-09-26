import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class EmailImgComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2ltZy9zcmMvaW1nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWlCL0MsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixHQUFHLENBQVU7SUFDYixHQUFHLENBQVU7SUFDYixLQUFLLENBQW1CO0lBQ3hCLE1BQU0sQ0FBbUI7SUFDekIsS0FBSyxDQUFzQzt1R0FMekMsaUJBQWlCOzJGQUFqQixpQkFBaUIsK0pBWGxCOzs7Ozs7Ozs7Q0FTWCwyREFWVyxZQUFZOzsyRkFZWCxpQkFBaUI7a0JBZjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7O0NBU1g7aUJBQ0E7OEJBRVUsR0FBRztzQkFBWCxLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1lbWFpbC1pbWcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGltZyBcbiAgICBbYWx0XT1cImFsdFwiXG4gICAgW3NyY109XCJzcmNcIlxuICAgIFt3aWR0aF09XCJ3aWR0aFwiXG4gICAgW2hlaWdodF09XCJoZWlnaHRcIlxuICAgIFtuZ1N0eWxlXT1cInN0eWxlXCJcbiAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBvdXRsaW5lOiBub25lOyBib3JkZXI6IG5vbmU7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcIlxuICAvPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxJbWdDb21wb25lbnQge1xuICBASW5wdXQoKSBhbHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyYz86IHN0cmluZztcbiAgQElucHV0KCkgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xufVxuIl19