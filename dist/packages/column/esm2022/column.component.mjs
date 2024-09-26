import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class EmailColumnComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbHVtbi9zcmMvY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWEvQyxNQUFNLE9BQU8sb0JBQW9CO0lBQ3RCLEtBQUssQ0FBMEI7SUFDL0IsTUFBTSxHQUFXLHdCQUF3QixDQUFDO3VHQUZ4QyxvQkFBb0I7MkZBQXBCLG9CQUFvQiw0SEFQckI7Ozs7Q0FJWCwyREFMVyxZQUFZOzsyRkFRWCxvQkFBb0I7a0JBWGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsUUFBUSxFQUFFOzs7O0NBSVg7aUJBQ0E7OEJBR1UsS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1thcHAtZW1haWwtY29sdW1uXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZTogYFxuICA8dGQgW25nU3R5bGVdPVwic3R5bGVcIiBbYXR0ci5kYXRhLWlkXT1cImRhdGFJZFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC90ZD5cbmAsXG59KVxuXG5leHBvcnQgY2xhc3MgRW1haWxDb2x1bW5Db21wb25lbnQge1xuICBASW5wdXQoKSBzdHlsZT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpIGRhdGFJZDogc3RyaW5nID0gJ19fYW5ndWxhci1lbWFpbC1jb2x1bW4nO1xufVxuIl19