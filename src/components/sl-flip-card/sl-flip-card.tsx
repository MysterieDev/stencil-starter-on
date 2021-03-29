import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sl-flip-card',
  styleUrl: 'sl-flip-card.css',
  shadow: true,
})
export class SlFlipCard {
  render() {
    return (
      <Host>
        <div class="sl-card">
          <div class="sl-content">
            <div class="sl-front">
              <slot name="sl-front">text</slot>
            </div>
            <div class="sl-back">
              <slot name="sl-back">text</slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
