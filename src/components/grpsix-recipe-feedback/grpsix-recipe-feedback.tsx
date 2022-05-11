import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-recipe-feedback',
  styleUrl: 'grpsix-recipe-feedback.css',
  shadow: true,
})
export class GrpsixRecipeFeedback {

  @Prop() recipeName: string = "Bananenmilch";

  @State() message: string = "";
  @State() value: string;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
    this.message = "Dein persönliches Feedback wurde gespeichert";
  }

  handleSubmit2(e) {
    e.preventDefault();
    console.log(this.value);
    this.message = "Dein persönliches Feedback  gespeichert";
  }

  ckeckInputFunction(event) {
    this.value = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  render() {
    return (
      <Host>
        <slot>
        <div class="imageContainer" id="container0">
          <img src="paper.jpg" alt="paper" id="kreis"/>
        <div class="container-fluid" id="container1">
        <div id="recipe">
          <h2>Beurteilung des Rezeptes {this.recipeName}</h2>
          <p>Gebe hier deine persönliche Bewertung zu dem Rezept {this.recipeName} ab und schaue diese später nochmals an</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>

            <div class="text-group">
              <p><u>Anlass</u></p>
              <input type="text" value={this.value} class="text-control" id="nameFeld" placeholder="für Hochzeiten, Kindergeburtstage, etc." required></input>
            </div>

            <div class="text-group">
              <p><u>Bewertung</u></p>
              <input type="text" value={this.value} class="text-control" id="emailFeld" placeholder="schnell, leicht, unkompliziert" required></input>
            </div>

            <div class="text-group">
              <p><u>Zeitaufwand von 1-4</u></p>
              <input type="Checkbox" value={this.value} id="checkboxTime" class="checkboxTime"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
            </div>

            <div class="range">
              <p><u>Gesamteindruck</u></p>
              <input type="range" value={this.value} id="range" required></input>
            </div>
              <div class="button">
            <button class="text-control" id="thumbsUp"><ion-icon name="thumbs-up-sharp"></ion-icon></button>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            
            <form onSubmit={(e) => this.handleSubmit2(e)}>
            <button class="text-control2" id="thumbsDown"><ion-icon name="thumbs-down-sharp"></ion-icon></button>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            
          </form>
          </div>

            <div>{this.message}</div>
          
          </form>
          
          
        </div>
        </div>
        </div>
        </slot>
      </Host>
    );
  }

}
