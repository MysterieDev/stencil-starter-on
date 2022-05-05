import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-button',
  styleUrl: 'pop-button.css',
  shadow: true,
})
export class PopButton {
  @Prop() text: string;

  @Prop() size: string;

  @Prop() link?: string;

  @Prop() color?: string;

  checkForLink() {
    if (this.link) {
      return <a href={this.link} target="_blank">{this.text}</a>;
    } else {
      return <a>{this.text}</a>;
    }
  }

  render() {
    return (
      <Host>
        <button class={`${this.size} ${this.color}`}>{this.checkForLink()}</button>
      </Host>
    );
  }
}
