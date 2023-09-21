import { newSpecPage } from '@stencil/core/testing';
import { IrRegister } from '../ir-register';

describe('ir-register', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IrRegister],
      html: `<ir-register></ir-register>`,
    });
    expect(page.root).toEqualHtml(`
      <ir-register>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ir-register>
    `);
  });
});
