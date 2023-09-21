import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import { v4 } from 'uuid';
//import $ from 'jquery';
//import 'select2';
import { DataFormat, GroupedDataFormat } from 'select2';

@Component({
  tag: 'ir-select',
  shadow: false,
})
export class IrSelect {
  @Prop({ reflect: true }) data: string | DataFormat[] | GroupedDataFormat[];
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @Prop({ reflect: true }) selectStyle: string;
  @State() selectData: DataFormat[] | GroupedDataFormat[] = [];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;

  private selectId = v4();
  private testElement: JQuery;

  componentWillLoad(): void {
    this.parseData();
  }

  componentDidLoad(): void {
    this.testElement = $(`#${this.selectId}`);
    this.initializeSelect2();
  }

  @Watch('data')
  handleDataChange(newValue: string): void {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }

  private parseData(): void {
    if (typeof this.data === 'string') {
      try {
        this.selectData = JSON.parse(this.data);
      } catch (error) {
        console.error(`Error parsing JSON data: ${error}`);
      }
    } else {
      this.selectData = this.data;
    }
  }

  private initializeSelect2(): void {
    if (!this.testElement || !this.testElement.length) {
      console.warn('Element not found');
      return;
    }

    this.testElement.select2({
      data: this.selectData,
    });

    this.testElement.on('select2:select', this.handleSelect);
  }

  private handleSelect = (event: any): void => {
    const selectedValue = event.params.data.id;
    this.selectedItem = selectedValue;
    this.onselectchange.emit(selectedValue);
  };

  render() {
    return <select id={this.selectId} title="select" class={`select2 ${this.selectStyle}`}></select>;
  }
}
