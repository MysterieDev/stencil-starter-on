import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-heading',
  styleUrl: 'pop-heading.css',
  shadow: true,
})
export class PopHeading {

  @Prop() heading : string;

  render() {
    return (
      <Host>
        <h2>{this.heading}</h2>
      </Host>
    );
  }

}
