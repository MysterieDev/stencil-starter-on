import { Component, Host, h, State, Prop } from '@stencil/core';

// Interface for API
interface ApiData {
  id: number;
  title: string;
  url: string;
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
  fetch('/ON-your-styleguide/rezepte/recipes.json')
  .then(res => res.json()) // Return the fetched Data as JSON
  .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes)) // apiData wird der Key aus apiRecipes zugewiesen
  .catch(err => console.error(err)); // catching errors and logging in console
}

  render() {
    return (
      <Host>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {this.apiData && // Checks if data is available
          this.apiData.map(recipe =>
            <div class="col">
              <div class="card">
                <img src={recipe.imageUrl} class="card-img-top grpsix-card-image-height" alt={this.imageAltTextInfo + (recipe.title)} />
                <div class="card-body">
                  <h5 class="card-title">{recipe.title}</h5>
                </div>
                <a href={recipe.url} class="btn btn-primary">Zum Rezept</a>
              </div>
            </div>
          )}
        </div>
      </Host>
    );
  }

}
