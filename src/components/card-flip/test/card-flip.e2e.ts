import { newE2EPage } from '@stencil/core/testing';

describe('card-flip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-flip></card-flip>');

    const element = await page.find('card-flip');
    expect(element).toHaveClass('hydrated');
  });
});
