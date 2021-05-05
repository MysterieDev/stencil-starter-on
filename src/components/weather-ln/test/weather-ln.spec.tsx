import { newSpecPage } from '@stencil/core/testing';
import { WeatherLn } from '../weather-ln';

describe('weather-ln', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WeatherLn],
      html: `<weather-ln></weather-ln>`,
    });
    expect(page.root).toEqualHtml(`
      <weather-ln>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </weather-ln>
    `);
  });
});
