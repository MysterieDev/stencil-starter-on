import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-herobanner',
  styleUrl: 'grpsix-herobanner.css',
  shadow: true,
})
export class GrpsixHerobanner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
