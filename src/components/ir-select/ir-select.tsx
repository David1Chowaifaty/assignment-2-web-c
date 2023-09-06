import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
@Component({
  tag: 'ir-select',
  styleUrl: 'ir-select.css',
  shadow: false,
})
export class IrSelect {
  @Prop({ reflect: true }) data: string;
  @Prop({ reflect: true, mutable: true }) selectedItem: string;
  @State() selectData: SelectTypes[] = [];
  @Event({ bubbles: true, composed: true }) onselectchange: EventEmitter<string>;
  @Element() el: HTMLElement;
  selectRef: HTMLSelectElement;

  componentWillLoad() {
    this.parseData();
    this.moveAttributesToSelectElement();
  }

  componentDidLoad() {
    this.initializeSelect2();
  }

  disconnectedCallback() {
    this.destroySelect2();
  }

  @Watch('data')
  handleDataChange(newValue: string) {
    if (newValue && newValue.trim() !== '') {
      this.parseData();
    }
  }

  private parseData() {
    try {
      this.selectData = JSON.parse(this.data) as SelectTypes[];
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
    $(this.selectRef).select2();
    $(this.selectRef).on('change', e => {
      const selectedValue = $(e.target).val().toString();
      this.onselectchange.emit(selectedValue);
      this.selectedItem = selectedValue;
    });
  }

  private destroySelect2() {
    $(this.selectRef).select2('destroy');
  }

  onSelectChange(e: Event) {
    const selectedValue = (e.target as HTMLSelectElement).value;
    this.onselectchange.emit(selectedValue);
    this.selectedItem = selectedValue;
  }

  render() {
    return (
      <Host>
        <select ref={el => (this.selectRef = el as HTMLSelectElement)} title="select">
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
