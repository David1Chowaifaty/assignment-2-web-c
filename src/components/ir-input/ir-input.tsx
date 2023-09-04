import { Component, Host, Prop, h,Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'ir-input',
  styleUrl: 'ir-input.css',
  shadow: false,
})
export class IrInput {
  @Prop({ reflect: true }) containerStyle: string;
  @Prop({ reflect: true }) labelStyle: string;
  @Prop({ reflect: true }) inputStyle: string;
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) id: string;
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) type: string;
  @Event({bubbles:true,composed:true}) ontextchange:EventEmitter<string>
  @State() visible:boolean=false;



  handleChange(event){
    this.visible=true;
    this.value = event.target.value;
    this.ontextchange.emit(this.value)
  }

  render() {
    return (
      <Host>
        <div class={this.containerStyle}>
          <span class={this.labelStyle} id={this.id}>
           {this.label}
          </span>
        </div>
        <input type={this.type} placeholder={this.placeholder} class={this.inputStyle} value={this.value} onInput={(event) => this.handleChange(event)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        {this.visible&&<p>{this.value}</p>}
      </Host>
    );
  }
}
