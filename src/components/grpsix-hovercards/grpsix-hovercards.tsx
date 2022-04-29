import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-hovercards',
  styleUrl: 'grpsix-hovercards.css',
  shadow: true,
})
export class GrpsixHovercards {

  render() {
    return (
      <Host>
        <div class="hovercard">
          <div class="card">
            <div class="front-page">
              <img src=""
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
