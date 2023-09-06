/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface IrCheckbox {
    checkboxStyle: string;
    checked: boolean;
    containerStyle: string;
    disabled: boolean;
    inputId: string;
    label: string;
    labelStyle: string;
  }
  interface IrInput {
    containerStyle: string;
    inputId: string;
    inputStyle: string;
    label: string;
    labelStyle: string;
    placeholder: string;
    type: string;
    value: string;
  }
  interface IrSelect {
    data: string;
    selectedItem: string;
  }
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
declare global {
  interface HTMLIrCheckboxElement extends Components.IrCheckbox, HTMLStencilElement {}
  var HTMLIrCheckboxElement: {
    prototype: HTMLIrCheckboxElement;
    new (): HTMLIrCheckboxElement;
  };
  interface HTMLIrInputElement extends Components.IrInput, HTMLStencilElement {}
  var HTMLIrInputElement: {
    prototype: HTMLIrInputElement;
    new (): HTMLIrInputElement;
  };
  interface HTMLIrSelectElement extends Components.IrSelect, HTMLStencilElement {}
  var HTMLIrSelectElement: {
    prototype: HTMLIrSelectElement;
    new (): HTMLIrSelectElement;
  };
  interface HTMLElementTagNameMap {
    'ir-checkbox': HTMLIrCheckboxElement;
    'ir-input': HTMLIrInputElement;
    'ir-select': HTMLIrSelectElement;
  }
}
declare namespace LocalJSX {
  interface IrCheckbox {
    checkboxStyle?: string;
    checked?: boolean;
    containerStyle?: string;
    disabled?: boolean;
    inputId?: string;
    label?: string;
    labelStyle?: string;
    onOncheckchange?: (event: IrCheckboxCustomEvent<boolean>) => void;
  }
  interface IrInput {
    containerStyle?: string;
    inputId?: string;
    inputStyle?: string;
    label?: string;
    labelStyle?: string;
    onOntextchange?: (event: IrInputCustomEvent<string>) => void;
    placeholder?: string;
    type?: string;
    value?: string;
  }
  interface IrSelect {
    data?: string;
    onOnselectchange?: (event: IrSelectCustomEvent<string>) => void;
    selectedItem?: string;
  }
  interface IntrinsicElements {
    'ir-checkbox': IrCheckbox;
    'ir-input': IrInput;
    'ir-select': IrSelect;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'ir-checkbox': LocalJSX.IrCheckbox & JSXBase.HTMLAttributes<HTMLIrCheckboxElement>;
      'ir-input': LocalJSX.IrInput & JSXBase.HTMLAttributes<HTMLIrInputElement>;
      'ir-select': LocalJSX.IrSelect & JSXBase.HTMLAttributes<HTMLIrSelectElement>;
    }
  }
}
