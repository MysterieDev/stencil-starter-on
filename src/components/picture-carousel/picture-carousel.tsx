import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'picture-carousel',
  styleUrl: 'picture-carousel.css',
  shadow: true,
})
export class PictureCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
