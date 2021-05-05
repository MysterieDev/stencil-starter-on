import { newE2EPage } from '@stencil/core/testing';

describe('weather-ln', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<weather-ln></weather-ln>');

    const element = await page.find('weather-ln');
    expect(element).toHaveClass('hydrated');
  });
});
