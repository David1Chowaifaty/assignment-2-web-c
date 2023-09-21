import { Component, Event, EventEmitter, Fragment, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'ir-button',
})
export class IrButton {
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) buttonTitle: string = '';
  @Prop({ reflect: true }) icon: string = '';
  @Prop({ reflect: true }) buttonStyle: string = '';
  @Prop({ reflect: true }) colorVariant: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) shadow: '' | '1' | '2' | '3' | '4' | '5' = '';
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
    let shadow = '';
    if (this.shadow !== '') {
      shadow = `box-shadow-${this.shadow}`;
    }
    return (
      <button type={this.type} onClick={this.handleClick.bind(this)} class={`btn ${this.applyButtonStyle()} ${this.buttonStyle} ${shadow} ${this.glow ? 'btn-glow' : ''} `}>
        {this.icon !== '' && (
          <Fragment>
            <i class={this.icon}></i>&nbsp;
          </Fragment>
        )}
        {this.buttonTitle}
      </button>
    );
  }
}
