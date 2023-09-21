import { newSpecPage } from '@stencil/core/testing';
import { IrSidebar } from '../ir-sidebar';

describe('ir-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IrSidebar],
      html: `<ir-sidebar></ir-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <ir-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-sidebar>
    `);
  });
});
