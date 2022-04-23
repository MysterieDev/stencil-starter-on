import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-recipe-gallery',
  styleUrl: 'grpsix-recipe-gallery.css',
  shadow: true,
})
export class GrpsixRecipeGallery {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
