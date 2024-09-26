import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class EmailHeadComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9oZWFkL3NyYy9oZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFRLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFleEQsTUFBTSxPQUFPLGtCQUFrQjtJQUdUO0lBRlgsS0FBSyxDQUFVO0lBRXhCLFlBQW9CLFlBQW1CO1FBQW5CLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDSCxDQUFDO3VHQVBVLGtCQUFrQjsyRkFBbEIsa0JBQWtCLHNHQVRuQjs7Ozs7OztHQU9ULDJEQVJTLFlBQVk7OzJGQVVYLGtCQUFrQjtrQkFiOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtpQkFDRjswRUFFVSxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWV0YSwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWVtYWlsLWhlYWQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZD5cbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCIgY29udGVudD1cInRleHQvaHRtbDsgY2hhcnNldD1VVEYtOFwiPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvaGVhZD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW1haWxIZWFkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlKSB7XG4gICAgaWYgKHRoaXMudGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRoaXMudGl0bGUpO1xuICAgIH1cbiAgfVxufVxuIl19