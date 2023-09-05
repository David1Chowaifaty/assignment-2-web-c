import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'ir-select',
  styleUrl: 'ir-select.css',
  shadow: false,
})
export class IrSelect {
  @Prop({ reflect: true }) data: string;
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @State() selectData: SelectTypes[];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;
  @Element() el: HTMLElement;
  selectRef: HTMLSelectElement;
  @State() parentAttributes: { name: string; value: string }[] = [];

  componentWillLoad() {
    this.setSelectData();
    Array.from(this.el.attributes).forEach(attribute => {
      if (attribute.name !== 'data') {
        this.parentAttributes.push({ name: attribute.name, value: attribute.value });
        this.el.removeAttribute(attribute.name);
      }
    });
  }

  componentDidLoad() {
    this.parentAttributes.forEach(attribute => {
      this.selectRef.setAttribute(attribute.name, attribute.value);
    });
  }

  @Watch('data')
  handleDataChange(newValue: string, _oldValue: string) {
    if (newValue !== _oldValue && newValue !== '') {
      this.setSelectData();
    }
  }

  setSelectData() {
    try {
      if (this.data && this.data.trim() !== '') {
        this.selectData = JSON.parse(this.data) as SelectTypes[];
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
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
        <select ref={el => (this.selectRef = el)} onChange={this.onSelectChange.bind(this)} title="select">
          {this.selectData.map(d => (
            <optgroup label={d.optgrouplabel}>
              {d.options.map(option => (
                <option value={option.value}>{option.title}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </Host>
    );
  }
}
