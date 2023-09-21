import { Component, Host, Prop, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ir-input',
  styleUrl: 'ir-input.css',
  shadow: false,
})
export class IrInput {
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) icon: string;
  @Prop({ reflect: true }) inputId: string;
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) type: string;
  @Prop({ reflect: true }) containerStyle: string;
  @Prop({ reflect: true }) required: boolean;
  @Event({ bubbles: true, composed: true }) ontextchange: EventEmitter<string>;
  @State() visible: boolean = false;

  handleChange(event) {
    this.visible = true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value);
  }
  applyContainerStyle() {
    const baseClass = this.label !== '' ? 'input-group input-group-sm' : 'form-group position-relative has-icon-left';
    return `${baseClass} ${this.containerStyle}`;
  }
  render() {
    return (
      <Host>
        <fieldset class={this.applyContainerStyle()}>
          {this.label && (
            <div class="input-group-prepend">
              <span class="input-group-text" id={this.inputId}>
                {this.label}
              </span>
            </div>
          )}
          <input
            type={this.type}
            placeholder={this.placeholder}
            class="form-control"
            value={this.value}
            onInput={event => this.handleChange(event)}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            required={this.required}
          />
          {this.icon && (
            <div class="form-control-position">
              <i class={this.icon}> </i>
            </div>
          )}
        </fieldset>
      </Host>
    );
  }
}
