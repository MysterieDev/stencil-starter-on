import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'favorites-component',
  styleUrl: 'favorites-component.css',
})
export class FavoritesComponent {
  @Prop() recipes: string;
  @State() internalRecipes: string[];

  componentWillLoad() {
    this.parseRecipes();
  }

  @Watch('recipes')
  parseRecipes() {
    if (this.recipes) {
      this.internalRecipes = JSON.parse(this.recipes);
    }q3
  }

  render() {
    return (
      <span class="favorites">
        <span class="favorites-container">
          {this.internalRecipes.map((recipe:any={})=>
            <span class="favorites-subcontainer">
              <span>
                <img src={recipe.img}></img>
              </span>
              <span>
                {recipe.title}
              </span>
            </span>
          )}
        </span>
      </span>
    );
  }
}
