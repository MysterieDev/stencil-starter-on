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

            <div class="card">
            <div class="front2">
              <slot name="front2"></slot>
            </div>
            <div class="back2">
              <slot name="back2"></slot>
            </div>
            </div>

            <div class="card">
          <div class="front3">
              <slot name="front3"></slot>
            </div>
            <div class="back3">
              <slot name="back3"></slot>
            </div>
            </div>

            <div class="card">
          <div class="front4">
              <slot name="front4"></slot>
            </div>
            <div class="back4">
              <slot name="back4"></slot>
            </div>
            </div>

            </div>
      </Host>
    );
  }
}
