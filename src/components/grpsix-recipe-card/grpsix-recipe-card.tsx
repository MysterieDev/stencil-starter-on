import { Component, Host, h, State } from '@stencil/core';

// Interface for API
interface ApiData {
  id: number;
  title: string;
  ingredients: Array<string>;
  preperation: Array<string>;
  tips: string;
  imageUrl: string;
}

interface FakeAPI {
  id: number,
  name: string
}

@Component({
  tag: 'grpsix-recipe-card',
  styleUrl: 'grpsix-recipe-card.css',
  shadow: true,
})
export class GrpsixRecipeCard {

  @State() apiData: ApiData[];
  @State() myActualRecipe: any;
  @State() myNewActualRecipe: any= "hal";
  @State() myFakeApiData: FakeAPI[] = [
    {id: 3, name: "Julian"},
    {id: 4, name: "Fleischmann"}
  ]


  doSmth = () => {
    // if(this.myActualRecipe === undefined) {return}

    // console.log('sync 1');
    // setTimeout(_ => console.log('sync 2'), 200);
    // setTimeout(_ => this.myActualRecipe = this.apiData.find(element => element.id === 3000), 1000);
    // setTimeout(_ => this.myNewActualRecipe = this.myNewActualRecipe.title, 2000);
    // Promise.resolve().then(_ => console.log('sync 3'));
    // Promise.resolve().then(_ => this.myActualRecipe = this.apiData.find(element => element.id === 3000));
    // console.log('sync 4')
    
    
    // window.onload = function () {
    //   if (this.apiData === undefined) {
    //       console.log("variable is nicht definiert!");
    //       return;
    //     } else {
    //       console.log("Variable ist endlich definiert");
    //       this.myActualRecipe = this.apiData.find(element => element.id === 3000);
    //   }
    // };
   }

  componentWillLoad() {
    fetch('./recipes.json')
    .then(res => res.json())
    .then((apiRecipes: Array<ApiData>) => (this.apiData = apiRecipes))
    // .then(this.doSmth)
    .catch(err => console.log(err));

    window.onload = function () {
      this.myActualRecipe = this.apiData.find(element => element.id === 3000);
    }
    
    if (this.apiData === undefined) {
      console.log("variable is nicht definiert!");
      return;
      } else {
        console.log("Variable ist endlich definiert");
        // this.myActualRecipe = this.apiData.find(element => element.id === 3000);
    }

    
    
    // // this.doSmth();

    // window.onload(
    //   if (this.apiData === undefined) {
    //     console.log("ist undefiniert");
    //   } else {
    //     this.doSmth();
    //   } 
    // );
  }


  // componentWillLoad() {
  //   return fetch('./recipes.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.apiData = data;
  //     });
  // }

   

  render() {
    return (
      <Host>
        <div>
          {/* <h1>Das ist Rezept: {setTimeout((_ => this.myNewActualRecipe), 3000)}</h1> */}
          <h1>Das ist Rezept: {this.myNewActualRecipe.title}</h1>
          {/* {console.log("Api Data Render: " + this.apiData)} */}
          {/* <button onClick={this.doSmth}>Rezept laden</button> */}
          {/* {setTimeout(_ => console.log("myActualRecipe Render: " + this.myActualRecipe.title), 3000)} */}
          {/* {console.log("myActualRecipe Render: " + this.myActualRecipe.title)} */}
          {/* {console.log(this.myActualRecipe.title)} */}
        </div>
      </Host>
    );
  }

}
