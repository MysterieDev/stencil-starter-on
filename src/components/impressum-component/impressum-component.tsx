import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'impressum-component',
  styleUrl: 'impressum-component.css',
  shadow: true,
})
export class ImpressumComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
