import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ir-card-header',
  styleUrl: 'ir-card-header.css',
})
export class IrCardHeader {
  @Prop({ reflect: true }) imageSource: string;
  @Prop({ reflect: true }) imageAltText: string;
  @Prop({ reflect: true }) headerTitle: string;

  render() {
    return (
      <Host>
        <div class="card-title text-center">
          <img src={this.imageSource} alt={this.imageAltText} />
        </div>
        <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
          <span>{this.headerTitle}</span>
        </h6>
      </Host>
    );
  }
}
