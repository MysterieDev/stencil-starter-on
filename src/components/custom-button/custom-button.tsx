import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrl: 'custom-button.css',
  shadow: true,
})
export class CustomButton {
@Prop () text: string;
@Prop() color?: string;

render() {
  return (
    <button class={`button ${this.color}`} type="button">
      {this.text}
    </button>
  );
  }
}