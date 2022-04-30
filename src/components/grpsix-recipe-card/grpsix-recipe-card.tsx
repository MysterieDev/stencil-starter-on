import { Component, Host, h, State, Prop } from '@stencil/core';

// Interface for API
interface ApiData {
  id: number;
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
   

  // getRecipe () {
  //   return fetch('./recipes.json')
  //   .then(res => res.json())
  //   .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes))
  //   .then(
  //     recipe => {
  //       return this.myActualRecipe = recipe.find(element => element.id === 2000);
  //     }
  //   )
  //   .catch(err => console.log(err));
  // }

  // Warum funktioniert das nicht????? --> recipe.find ist void????
  // showRecipes () {
  //   this.getRecipes().then(
  //     recipe => {
  //       this.myActualRecipe = recipe.find(element => element.id === 3000);
        
  //       console.log(this.myActualRecipe);
  //     }
  //   )
  // }


  render() {
    return (
      <Host>
        <div>
          <h1>Das ist Rezept: {this.myActualRecipe.title}</h1>
        </div>
      </Host>
    );
  }

}
