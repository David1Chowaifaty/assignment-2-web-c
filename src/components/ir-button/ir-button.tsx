import { Component, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'ir-button',
})
export class IrButton {
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) buttonTitle: string = '';
  @Prop({ reflect: true }) icon: string = '';
  @Prop({ reflect: true }) buttonStyle: string = '';
  @Prop({ reflect: true }) colorVariant: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) shadow: '0' | '1' | '2' | '3' | '4' | '5' = '0';
  @Prop({ reflect: true }) glow: boolean;
  @Prop({ reflect: true }) shapeVariant: 'default' | 'round' | 'square' | 'outline' = 'default';

  @Event({ bubbles: true, composed: true }) buttonClicked: EventEmitter<any>;

  @Watch('shapeVariant')
  shapeChanged() {
    this.applyButtonStyle();
  }
  @Watch('colorVariant')
  colorChanged() {
    this.applyButtonStyle();
  }

  private applyButtonStyle() {
    switch (this.shapeVariant) {
      case 'round':
        return `btn-${this.colorVariant} round`;
      case 'square':
        return `btn-${this.colorVariant} square`;
      case 'outline':
        return `btn-outline-${this.colorVariant}`;
      default:
        return `btn-${this.colorVariant}`;
    }
  }
  handleClick() {
    this.buttonClicked.emit();
  }
  render() {
    return (
      <button
        type={this.type}
        onClick={this.handleClick.bind(this)}
        class={`btn btn-min-width ${this.applyButtonStyle()} box-shadow-${this.shadow} ${this.glow && 'btn-glow'} ${this.buttonStyle}`}
      >
        {this.icon !== '' && <i class={this.icon}></i>}
        {this.buttonTitle}
      </button>
    );
  }
}
