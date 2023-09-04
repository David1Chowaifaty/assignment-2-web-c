import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'ir-select',
  styleUrl: 'ir-select.css',
  shadow: false,
})
export class IrSelect {
  @Prop({ reflect: true }) data: string;
  @Prop({ reflect: true }) selectName: string;
  @Prop({ reflect: true }) selectStyle: string;
  @Prop({ reflect: true }) selectTitle: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @State() selectData: SelectTypes[];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;
  componentWillLoad() {
    this.setSelectData();
  }
  @Watch('data')
  handleDataChange() {
    this.setSelectData();
  }
  setSelectData() {
    if (this.data !== '') {
      this.selectData = JSON.parse(this.data) as SelectTypes[];
    }
  }
  onSelectChange(e: Event) {
    const selectedValue = (e.target as HTMLSelectElement).value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }
  render() {
    return (
      <Host>
        <select disabled={this.disabled} onChange={this.onSelectChange.bind(this)} class={this.selectStyle} title={this.selectTitle}>
          {this.selectData.map(d => {
            return (
              <optgroup label={d.optgrouplabel}>
                {d.options.map(option => (
                  <option value={option.value}>{option.title}</option>
                ))}
              </optgroup>
            );
          })}
        </select>
      </Host>
    );
  }
}
