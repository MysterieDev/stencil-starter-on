import { Component, Host, h, State } from '@stencil/core';

// Interface for APi
interface ApiData {
  title: string;
  title_ingredients: string;
  ingredients: Array<string>;
  title_preperation: string;
  preperation: Array<string>;
}

@Component({
  tag: 'grpsix-recipe-gallery',
  styleUrl: 'grpsix-recipe-gallery.css',
  shadow: false,
})
export class GrpsixRecipeGallery {

@State() apiData: ApiData[];

componentWillLoad() {
  fetch('./ON-your-styleguide/recipes.json') // Fetching the data via api :TODO: Dummy
  .then(res => res.json()) // Return the fetched Data as JSON
  .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes)) // apiData wird der Key aus apiRecipes zugewiesen
  .catch(err => console.error(err)); // catching errors and logging in console
}

  render() {
    return (
      <Host>
        <div>
          {this.apiData && // If Data is available, then interate thru the array
          this.apiData.map(recipe => // return the map, iterate thru the array and create the following elements for each element
            <div>
              <h3>{recipe.title}</h3>
              <h4>{recipe.title_ingredients}</h4>
            </div>
          )}
        </div>
      </Host>
    );
  }

}
