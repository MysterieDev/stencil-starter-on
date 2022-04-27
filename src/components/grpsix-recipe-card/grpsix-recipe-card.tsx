import { Component, Host, h, State } from '@stencil/core';

// Interface for API
interface ApiData {
  title: string;
  ingredients: Array<string>;
  preperation: Array<string>;
  tips: string;
  imageUrl: string;
}

@Component({
  tag: 'grpsix-recipe-card',
  styleUrl: 'grpsix-recipe-card.css',
  shadow: true,
})
export class GrpsixRecipeCard {

  @State() apiData: ApiData[];

  componentWillLoad() {
    fetch('./recipes.json')
    .then(res => res.json())
    .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Host>
        <div>
          {this.apiData &&
          this.apiData.map((recipe, index) =>
            <p></p>
          )}
        </div>
      </Host>
    );
  }

}
