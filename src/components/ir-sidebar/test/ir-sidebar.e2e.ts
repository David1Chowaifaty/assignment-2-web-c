import { newE2EPage } from '@stencil/core/testing';

describe('ir-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ir-sidebar></ir-sidebar>');

    const element = await page.find('ir-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
