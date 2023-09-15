import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import $ from 'jquery';
import { GroupedDataFormat } from 'select2';
import 'select2/dist/css/select2.min.css';

@Component({
  tag: 'ir-select',
  styleUrl: 'ir-select.css',
  shadow: false,
})
export class IrSelect {
  @Prop({ reflect: true }) data: string;
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @State() selectData: GroupedDataFormat[] = [];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;
  @Element() el: HTMLElement;
  selectRef: HTMLSelectElement;
  componentWillLoad() {
    this.parseData();
    this.moveAttributesToSelectElement();
  }

  componentDidLoad() {
    // console.log($, Select2);
    this.initializeSelect2();
  }

  @Watch('data')
  handleDataChange(newValue: string) {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }

  private parseData() {
    try {
      this.selectData = JSON.parse(this.data) as GroupedDataFormat[];
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  }

  private moveAttributesToSelectElement() {
    Array.from(this.el.attributes).forEach(attribute => {
      if (attribute.name !== 'data') {
        this.selectRef?.setAttribute(attribute.name, attribute.value);
        this.el.removeAttribute(attribute.name);
      }
    });
  }

  private initializeSelect2() {
    $(this.selectRef).select2({
      data: this.selectData,
    });
    $(this.selectRef).on('change', e => {
      const selectedValue = $(e.target).val().toString();
      console.log(selectedValue);
      this.onselectchange.emit(selectedValue);
      this.selectedItem = selectedValue;
    });
  }

  onSelectChange(e: Event) {
    const selectedValue = (e.target as HTMLSelectElement).value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }

  render() {
    return (
      <Host>
        <div class={'form-group'}>
          <div class="input-group row m-0">
            <select ref={el => (this.selectRef = el as HTMLSelectElement)} title="select" class={'select2-container form-control'}>
              {/* {this.selectData.map(d => (
            <optgroup label={d.optgrouplabel}>
              {d.options.map(option => (
                <option value={option.value}>{option.title}</option>
              ))}
            </optgroup>
          ))} */}
            </select>{' '}
          </div>
        </div>
      </Host>
    );
  }
}
