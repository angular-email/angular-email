import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class EmailHtmlComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9odG1sL3NyYy9odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBYS9DLE1BQU0sT0FBTyxrQkFBa0I7SUFDcEIsSUFBSSxHQUFXLElBQUksQ0FBQztJQUNwQixHQUFHLEdBQVcsS0FBSyxDQUFDO3VHQUZsQixrQkFBa0I7MkZBQWxCLGtCQUFrQixnSEFQbkI7Ozs7O0dBS1QsMkRBTlMsWUFBWTs7MkZBUVgsa0JBQWtCO2tCQVg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7R0FLVDtpQkFDRjs4QkFFVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWVtYWlsLWh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aHRtbCAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgeG1sbnM6dj1cInVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206dm1sXCIgeG1sbnM6bz1cInVybjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOm9mZmljZVwiIFxuICAgIFthdHRyLmxhbmddPVwibGFuZ1wiIFthdHRyLmRpcl09XCJkaXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2h0bWw+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsSHRtbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9ICdlbic7XG4gIEBJbnB1dCgpIGRpcjogc3RyaW5nID0gJ2x0cic7XG59XG4iXX0=