import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EmailTextComponent {
    private el;
    private renderer;
    style: {
        [key: string]: string;
    };
    id?: string;
    class?: string;
    constructor(el: ElementRef, renderer: Renderer2);
    get computedStyles(): {
        fontSize: string;
        lineHeight: string;
        margin: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailTextComponent, "app-email-text", never, { "style": { "alias": "style"; "required": false; }; "id": { "alias": "id"; "required": false; }; "class": { "alias": "class"; "required": false; }; }, {}, never, ["*"], true, never>;
}
