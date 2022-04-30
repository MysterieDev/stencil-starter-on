import { Component, Host, h, State, Prop } from '@stencil/core';

// Interface for API
interface ApiData {
  id: number;
  title: string;
  ingredients: Array<string>;
  preperations: Array<string>;
  tips: string;
  imageUrl: string;
}

@Component({
  tag: 'grpsix-recipe-card',
  styleUrl: 'grpsix-recipe-card.css',
  shadow: false,
})
export class GrpsixRecipeCard {

  @State() apiData: ApiData[];
  @State() myActualRecipe: any; // Any?
  @Prop() recipeId: number;

  componentWillLoad() {
    return fetch('./recipes.json')
    .then(res => res.json())
    .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes))
    .then(
      recipe => {
        this.myActualRecipe = recipe.find(element => element.id === this.recipeId);
      }
    )
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Host>
        <div class="container">
          <h1>{this.myActualRecipe.title}</h1>
          {/* https://stenciljs.com/docs/templating-jsx#loops */}

          {this.myActualRecipe.ingredients &&
            <div>
              <h3>Zutaten</h3>
                <ul>
                  {this.myActualRecipe.ingredients.map((ingredient) =>
                    <li>{ingredient}</li>
                  )}
                </ul>
            </div>
          }
          
          {this.myActualRecipe.preperations &&
            <div>
              <h3>Zubereitung</h3>
              <ol>
                {this.myActualRecipe.preperations.map((preperation) =>
                  <li>{preperation}</li>
                )}
              </ol>
            </div>
          }
          
          {this.myActualRecipe.tips &&
            <div>
              <h3>Weitere Tipps zur Zubereitung</h3>
              <p>{this.myActualRecipe.tips}</p>
            </div>
          }
        </div>        
      </Host>
    );
  }

}
