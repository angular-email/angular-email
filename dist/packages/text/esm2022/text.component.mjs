import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class EmailTextComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy90ZXh0L3NyYy90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBVS9DLE1BQU0sT0FBTyxrQkFBa0I7SUFLVDtJQUF3QjtJQUpuQyxLQUFLLEdBQThCLEVBQUUsQ0FBQztJQUN0QyxFQUFFLENBQVU7SUFDWixLQUFLLENBQVU7SUFFeEIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQUcsQ0FBQztJQUVuRSxJQUFJLGNBQWM7UUFDaEIsT0FBTztZQUNMLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsSUFBSSxDQUFDLEtBQUs7U0FDZCxDQUFDO0lBQ0osQ0FBQzt1R0FkVSxrQkFBa0I7MkZBQWxCLGtCQUFrQixnSUFKbkI7O2tCQUVNLDJEQUhOLFlBQVk7OzJGQUtYLGtCQUFrQjtrQkFSOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixRQUFRLEVBQUU7O2tCQUVNO2lCQUNqQjt1R0FFVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZW1haWwtdGV4dCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZTogYDxwIFtuZ1N0eWxlXT1cImNvbXB1dGVkU3R5bGVzXCIgW2F0dHIuaWRdPVwiaWRcIiBbYXR0ci5jbGFzc109XCJjbGFzc1wiIFthdHRyLnN0eWxlXT1cInN0eWxlXCI+XG4gICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgPC9wPmAsXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsVGV4dENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzcz86IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgZ2V0IGNvbXB1dGVkU3R5bGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgICAgbWFyZ2luOiAnMTZweCAwJyxcbiAgICAgIC4uLnRoaXMuc3R5bGUsXG4gICAgfTtcbiAgfVxufVxuIl19