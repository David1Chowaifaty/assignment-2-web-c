import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

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
  @Prop({ reflect: true }) selectId: string;
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @State() selectData: SelectTypes[];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;
  @Element() el: HTMLElement;
  selectRef: HTMLSelectElement;
  @State() parentStyles: string;
  componentWillLoad() {
    this.setSelectData();
    const styles = this.el.className;
    this.parentStyles = styles;
    this.el.removeAttribute('class');
  }
  componentDidLoad() {
    this.selectRef.className = this.parentStyles;
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
        <select ref={el => (this.selectRef = el)} id={this.selectId} disabled={this.disabled} onChange={this.onSelectChange.bind(this)} title={this.selectTitle}>
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
