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

{/* <apollo-button id="primary" text="Start Stream" appearance="primary"></apollo-button>
        <apollo-button text="Send" appearance="secondary"></apollo-button>
        <apollo-button text="Record" appearance="tertiary"></apollo-button>
        <apollo-button text="End Stream" appearance="warning"></apollo-button>
        <apollo-button text="Delete VOD" appearance="danger"></apollo-button> */}