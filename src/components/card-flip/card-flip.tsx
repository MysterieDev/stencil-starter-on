import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-flip',
  styleUrl: 'card-flip.css',
  shadow: true
})
export class cardFlip{

  @Prop({reflect: true, mutable: true}) imgSrc: string;

  render() {
    return (
      <Host>
        
        <div class="container">
          <div class="card">
            <div class="front">
              <slot name="front"></slot>
            </div>
            <div class="back">
              <slot name="back"></slot>
            </div>
            </div>
            </div>
      </Host>
    );
  }
}
