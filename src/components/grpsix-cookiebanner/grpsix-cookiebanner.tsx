import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-cookiebanner',
  styleUrl: 'grpsix-cookiebanner.css',
  shadow: true,
})
export class GrpsixCookiebanner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
//Funktionen  hier!!!
}
