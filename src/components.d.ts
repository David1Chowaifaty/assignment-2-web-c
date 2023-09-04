/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IrCheckbox {
        "checkboxStyle": string;
        "checked": boolean;
        "containerStyle": string;
        "disabled": boolean;
        "inputId": string;
        "label": string;
        "labelStyle": string;
    }
}
export interface IrCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxElement;
}
declare global {
    interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {
    }
    var HTMLIrCheckboxElement: {
        prototype: HTMLIrCheckboxElement;
        new (): HTMLIrCheckboxElement;
    };
    interface HTMLElementTagNameMap {
        "ir-checkbox": HTMLIrCheckboxElement;
    }
}
declare namespace LocalJSX {
    interface IrCheckbox {
        "checkboxStyle"?: string;
        "checked"?: boolean;
        "containerStyle"?: string;
        "disabled"?: boolean;
        "inputId"?: string;
        "label"?: string;
        "labelStyle"?: string;
        "onOncheckchange"?: (event: IrCheckboxCustomEvent<boolean>) => void;
    }
    interface IntrinsicElements {
        "ir-checkbox": IrCheckbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-checkbox": LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
        }
    }
}
