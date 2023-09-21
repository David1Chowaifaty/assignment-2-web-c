import { newSpecPage } from '@stencil/core/testing';
import { IrCardHeader } from '../ir-card-header';

describe('ir-card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IrCardHeader],
      html: `<ir-card-header></ir-card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ir-card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-card-header>
    `);
  });
});
