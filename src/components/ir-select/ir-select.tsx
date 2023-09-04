import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ir-select',
  styleUrl: 'ir-select.css',
  shadow: true,
})
export class IrSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
