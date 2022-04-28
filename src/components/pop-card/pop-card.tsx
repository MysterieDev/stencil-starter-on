import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pop-card',
  styleUrl: 'pop-card.css',
  shadow: true,
})
export class PopCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
