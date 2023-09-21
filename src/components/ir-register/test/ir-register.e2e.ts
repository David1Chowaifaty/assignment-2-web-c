import { newE2EPage } from '@stencil/core/testing';

describe('ir-register', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ir-register></ir-register>');

    const element = await page.find('ir-register');
    expect(element).toHaveClass('hydrated');
  });
});
