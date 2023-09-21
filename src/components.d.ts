/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataFormat, GroupedDataFormat } from "select2";
export { DataFormat, GroupedDataFormat } from "select2";
export namespace Components {
    interface IrButton {
        "buttonStyle": string;
        "buttonTitle": string;
        "colorVariant": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "glow": boolean;
        "icon": string;
        "shadow": '0' | '1' | '2' | '3' | '4' | '5';
        "shapeVariant": 'default' | 'round' | 'square' | 'outline';
        "type": 'button' | 'submit' | 'reset';
    }
    interface IrCheckbox {
        "checkboxStyle": string;
        "checked": boolean;
        "containerStyle": string;
        "disabled": boolean;
        "inputId": string;
        "label": string;
        "labelStyle": string;
    }
    interface IrInput {
        "icon": string;
        "inputId": string;
        "label": string;
        "placeholder": string;
        "required": boolean;
        "type": string;
        "value": string;
    }
    interface IrLink {
        "linkDestination": string;
        "linkTitle": string;
    }
    interface IrLogin {
    }
    interface IrSelect {
        "data": string | DataFormat[] | GroupedDataFormat[];
        "selectStyle": string;
        "selectedItem": string;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff": string;
        "labelOn": string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value": boolean;
        "wrapperClass"?: string;
    }
}
export interface IrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrButtonElement;
}
export interface IrCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrCheckboxElement;
}
export interface IrInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrInputElement;
}
export interface IrSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSelectElement;
}
export interface IrSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIrSwitchElement;
}
declare global {
    interface HTMLIrButtonElement extends Components.IrButton, HTMLStencilElement {
    }
    var HTMLIrButtonElement: {
        prototype: HTMLIrButtonElement;
        new (): HTMLIrButtonElement;
    };
    interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {
    }
    var HTMLIrCheckboxElement: {
        prototype: HTMLIrCheckboxElement;
        new (): HTMLIrCheckboxElement;
    };
    interface HTMLIrInputElement extends Components.IrInput, HTMLStencilElement {
    }
    var HTMLIrInputElement: {
        prototype: HTMLIrInputElement;
        new (): HTMLIrInputElement;
    };
    interface HTMLIrLinkElement extends Components.IrLink, HTMLStencilElement {
    }
    var HTMLIrLinkElement: {
        prototype: HTMLIrLinkElement;
        new (): HTMLIrLinkElement;
    };
    interface HTMLIrLoginElement extends Components.IrLogin, HTMLStencilElement {
    }
    var HTMLIrLoginElement: {
        prototype: HTMLIrLoginElement;
        new (): HTMLIrLoginElement;
    };
    interface HTMLIrSelectElement extends Components.IrSelect, HTMLStencilElement {
    }
    var HTMLIrSelectElement: {
        prototype: HTMLIrSelectElement;
        new (): HTMLIrSelectElement;
    };
    interface HTMLIrSwitchElement extends Components.IrSwitch, HTMLStencilElement {
    }
    var HTMLIrSwitchElement: {
        prototype: HTMLIrSwitchElement;
        new (): HTMLIrSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "ir-button": HTMLIrButtonElement;
        "ir-checkbox": HTMLIrCheckboxElement;
        "ir-input": HTMLIrInputElement;
        "ir-link": HTMLIrLinkElement;
        "ir-login": HTMLIrLoginElement;
        "ir-select": HTMLIrSelectElement;
        "ir-switch": HTMLIrSwitchElement;
    }
}
declare namespace LocalJSX {
    interface IrButton {
        "buttonStyle"?: string;
        "buttonTitle"?: string;
        "colorVariant"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "glow"?: boolean;
        "icon"?: string;
        "onButtonClicked"?: (event: IrButtonCustomEvent<any>) => void;
        "shadow"?: '0' | '1' | '2' | '3' | '4' | '5';
        "shapeVariant"?: 'default' | 'round' | 'square' | 'outline';
        "type"?: 'button' | 'submit' | 'reset';
    }
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
    interface IrInput {
        "icon"?: string;
        "inputId"?: string;
        "label"?: string;
        "onOntextchange"?: (event: IrInputCustomEvent<string>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface IrLink {
        "linkDestination"?: string;
        "linkTitle"?: string;
    }
    interface IrLogin {
    }
    interface IrSelect {
        "data"?: string | DataFormat[] | GroupedDataFormat[];
        "onOnselectchange"?: (event: IrSelectCustomEvent<string>) => void;
        "selectStyle"?: string;
        "selectedItem"?: string;
    }
    interface IrSwitch {
        "baseClass"?: string;
        "classOn"?: string;
        "colorOn"?: string;
        "disabled"?: boolean;
        "handleWidth"?: string | 'auto';
        "indeterminate"?: boolean;
        "inverse"?: boolean;
        "labelOff"?: string;
        "labelOn"?: string;
        "labelText"?: string;
        "labelWidth"?: string | 'auto';
        "offClass"?: string;
        "offColor"?: string;
        "onValueChange"?: (event: IrSwitchCustomEvent<boolean>) => void;
        "radioAllOff"?: boolean;
        "readonly"?: boolean;
        "size"?: string | 'mini' | 'small' | 'normal' | 'large';
        "switch_animate"?: boolean;
        "value"?: boolean;
        "wrapperClass"?: string;
    }
    interface IntrinsicElements {
        "ir-button": IrButton;
        "ir-checkbox": IrCheckbox;
        "ir-input": IrInput;
        "ir-link": IrLink;
        "ir-login": IrLogin;
        "ir-select": IrSelect;
        "ir-switch": IrSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ir-button": LocalJSX.IrButton & JSXBase.HTMLAttributes<HTMLIrButtonElement>;
            "ir-checkbox": LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
            "ir-input": LocalJSX.IrInput & JSXBase.HTMLAttributes<HTMLIrInputElement>;
            "ir-link": LocalJSX.IrLink & JSXBase.HTMLAttributes<HTMLIrLinkElement>;
            "ir-login": LocalJSX.IrLogin & JSXBase.HTMLAttributes<HTMLIrLoginElement>;
            "ir-select": LocalJSX.IrSelect & JSXBase.HTMLAttributes<HTMLIrSelectElement>;
            "ir-switch": LocalJSX.IrSwitch & JSXBase.HTMLAttributes<HTMLIrSwitchElement>;
        }
    }
}
