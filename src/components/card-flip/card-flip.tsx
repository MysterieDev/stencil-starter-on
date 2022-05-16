import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'card-flip',
  styleUrl: 'card-flip.css',
  shadow: true,
})
export class CardFlip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
