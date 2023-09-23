import { newSpecPage } from '@stencil/core/testing';
import { IrIr } from '../ir-ir';

describe('ir-ir', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IrIr],
      html: `<ir-ir></ir-ir>`,
    });
    expect(page.root).toEqualHtml(`
      <ir-ir>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-ir>
    `);
  });
});
