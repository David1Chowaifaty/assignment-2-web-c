import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ir-checkbox',
  styleUrl: 'ir-checkbox.css',
  shadow: true,
})
export class IrCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
