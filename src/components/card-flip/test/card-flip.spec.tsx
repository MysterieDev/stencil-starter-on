import { newSpecPage } from '@stencil/core/testing';
import { CardFlip } from '../card-flip';

describe('card-flip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardFlip],
      html: `<card-flip></card-flip>`,
    });
    expect(page.root).toEqualHtml(`
      <card-flip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-flip>
    `);
  });
});
