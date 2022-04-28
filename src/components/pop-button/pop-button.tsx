import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-button',
  styleUrl: 'pop-button.css',
  shadow: true,
})

export class PopButton {

  @Prop() text :string;

  @Prop() size :string;

  @Prop() link? :string;

  @Prop() color?: string;

  render() {
    return (
      <Host>
        <button class={`${this.size} ${this.color}`}><a href={this.link ? this.link : "#"}>{this.text}</a></button>
      </Host>
    );
  }

}
