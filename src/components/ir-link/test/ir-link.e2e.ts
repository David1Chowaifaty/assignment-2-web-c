import { newE2EPage } from '@stencil/core/testing';

describe('ir-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ir-link></ir-link>');

    const element = await page.find('ir-link');
    expect(element).toHaveClass('hydrated');
  });
});
