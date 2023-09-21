import { newSpecPage } from '@stencil/core/testing';
import { IrLink } from '../ir-link';

describe('ir-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IrLink],
      html: `<ir-link></ir-link>`,
    });
    expect(page.root).toEqualHtml(`
      <ir-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-link>
    `);
  });
});
