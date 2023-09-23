import { newE2EPage } from '@stencil/core/testing';

describe('ir-ir', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ir-ir></ir-ir>');

    const element = await page.find('ir-ir');
    expect(element).toHaveClass('hydrated');
  });
});
