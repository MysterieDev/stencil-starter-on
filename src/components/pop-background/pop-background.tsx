import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-background',
  styleUrl: 'pop-background.css',
  shadow: true,
})


export class PopBackground {

  @Prop() variation :string;

  @Prop() color: string;
  
  render() {
    return (
      <Host>
        <div class={`background ${this.variation} ${this.color}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
