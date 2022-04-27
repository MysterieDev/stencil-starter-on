import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-buttons',
  styleUrl: 'grpsix-buttons.css',
  shadow: true,
})
export class GrpsixButtons {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
