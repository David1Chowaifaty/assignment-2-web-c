import { newE2EPage } from '@stencil/core/testing';

describe('ir-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ir-card-header></ir-card-header>');

    const element = await page.find('ir-card-header');
    expect(element).toHaveClass('hydrated');
  });
});
