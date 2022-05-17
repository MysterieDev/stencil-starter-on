import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'qr-generator',
  styleUrl: 'qr-generator.css',
  shadow: true,
})
export class QrGenerator {
@Prop () link: string;
  render() {
    return (
      <Host>
        <slot>
        <img  src= {this.link} />
        </slot>
      </Host>
    );
  }

}

