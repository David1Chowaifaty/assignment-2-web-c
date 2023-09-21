import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ir-button',
})
export class IrButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
