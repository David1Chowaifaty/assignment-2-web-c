import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'ir-checkbox',
  styleUrl: 'ir-checkbox.css',
  shadow: false,
})
export class IrCheckbox {
  @Prop({ reflect: true }) label: string = '';
  @Prop({ reflect: true }) inputId: string = '';
  @Prop({ reflect: true }) checkboxStyle: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) labelStyle: string;
  @Prop({ reflect: true }) containerStyle: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Event({ bubbles: true, composed: true }) oncheckchange: EventEmitter<boolean>;

  @State() labelShown: boolean = false;
  checkboxRef: HTMLElement;
  componentWillLoad() {
    this.setLabelShown();
  }
  componentDidLoad() {
    $(this.checkboxRef).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
    });
    $(this.checkboxRef).on('ifChanged', (event: any) => {
      this.handleChange(event);
    });
  }
  @Watch('label')
  onLabelChange() {
    this.setLabelShown();
  }
  setLabelShown() {
    if (this.label !== '' && this.inputId !== '') {
      this.labelShown = true;
    } else {
      this.labelShown = false;
    }
  }
  handleChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.checked = isChecked;
    this.oncheckchange.emit(isChecked);
  }

  render() {
    return (
      <Host>
        <input
          ref={el => (this.checkboxRef = el)}
          type="checkbox"
          disabled={this.disabled}
          onChange={this.handleChange.bind(this)}
          checked={this.checked}
          class={this.checkboxStyle}
          id={this.inputId}
        />
        {this.labelShown && (
          <label class={this.labelStyle} htmlFor={this.inputId}>
            {this.label}
          </label>
        )}
      </Host>
    );
  }
}
