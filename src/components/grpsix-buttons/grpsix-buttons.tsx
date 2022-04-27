import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-buttons',
  styleUrl: 'grpsix-buttons.css',
  shadow: true,
})

export class GrpsixButtons {
  @Prop() buttonLabel: string = '';

  render() {
    return (
      <Host>
        <div>
          <button class="btn btn-primary">
          <slot>{this.buttonLabel}</slot>
          </button>
        </div>
      </Host>
    );
  }

}
