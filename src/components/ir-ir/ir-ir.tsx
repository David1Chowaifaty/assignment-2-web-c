import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { IrStyles } from '../../model/IrStyles';
import { onlineStyles } from '../../constants/styles';

@Component({
  tag: 'ir-ir',
})
export class IrIr {
  @Prop({ reflect: true }) hrefs: string = '';
  @State() arrHrefs: IrStyles[] = onlineStyles;
  componentWillLoad() {
    this.parseRefs();
  }

  componentDidLoad() {
    this.initializeStyles();
  }

  @Watch('hrefs')
  hrefsChanged() {
    this.parseRefs();
    this.initializeStyles();
  }

  private parseRefs() {
    if (this.hrefs !== '') this.arrHrefs.push(JSON.parse(this.hrefs));
  }

  private appendTag(tagName: string, attributes: any) {
    const tag = document.createElement(tagName);
    const selectorParts = [];

    Object.keys(attributes).forEach(attr => {
      tag.setAttribute(attr, attributes[attr]);
      selectorParts.push(`[${attr}="${attributes[attr]}"]`);
    });

    const selector = `${tagName}${selectorParts.join('')}`;
    const existingTag = document.querySelector(selector);

    if (!existingTag) {
      document.head.appendChild(tag);
    }
  }

  private initializeStyles() {
    this.arrHrefs.forEach(ref => {
      if (ref.href) {
        this.appendTag('link', {
          href: ref.href,
          rel: 'stylesheet',
          type: 'text/css',
        });
      }
      if (ref.script) {
        this.appendTag('script', {
          src: ref.script,
        });
      }
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
