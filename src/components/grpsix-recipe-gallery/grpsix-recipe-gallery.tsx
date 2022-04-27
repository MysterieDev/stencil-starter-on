import { Component, Host, h, State, Prop } from '@stencil/core';

// Interface for API
interface ApiData {
  title: string;
  ingredients: Array<string>;
  preperation: Array<string>;
  tips: string;
  imageUrl: string;
}

@Component({
  tag: 'grpsix-recipe-gallery',
  styleUrl: 'grpsix-recipe-gallery.css',
  shadow: false,
})
export class GrpsixRecipeGallery {

@State() apiData: ApiData[];
@Prop() imageAltTextInfo: string = "Bild für ";

componentWillLoad() {
  fetch('./recipes.json') // Fetching the data via api :TODO: Dummy
  .then(res => res.json()) // Return the fetched Data as JSON
  .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes)) // apiData wird der Key aus apiRecipes zugewiesen
  .catch(err => console.error(err)); // catching errors and logging in console
}

componentDidLoad() {
  console.log(this.apiData);
}

  render() {
    return (
      <Host>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {this.apiData && // Checks if data is available
          this.apiData.map(recipe =>
            <div class="col">
              <div class="card">
                <img src={recipe.imageUrl} class="card-img-top" alt={this.imageAltTextInfo + (recipe.title)} />
                <div class="card-body">
                  <h5 class="card-title">{recipe.title}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }

}
