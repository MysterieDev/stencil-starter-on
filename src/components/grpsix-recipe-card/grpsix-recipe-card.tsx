import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-recipe-card',
  styleUrl: 'grpsix-recipe-card.css',
  shadow: true,
})
export class GrpsixRecipeCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
