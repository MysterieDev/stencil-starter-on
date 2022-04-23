import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-recipe-galery',
  styleUrl: 'grpsix-recipe-galery.css',
  shadow: true,
})
export class GrpsixRecipeGalery {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
