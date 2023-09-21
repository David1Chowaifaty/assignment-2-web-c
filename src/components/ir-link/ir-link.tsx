import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ir-link',
  styleUrl: 'ir-link.css',
})
export class IrLink {
  @Prop({ reflect: true }) linkTitle: string;
  @Prop({ reflect: true }) linkDestination: string;

  render() {
    return (
      <Host>
        <a href={this.linkDestination} class="card-link">
          {this.linkTitle}
        </a>
      </Host>
    );
  }
}
