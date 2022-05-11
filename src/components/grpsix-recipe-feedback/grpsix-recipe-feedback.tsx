import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-recipe-feedback',
  styleUrl: 'grpsix-recipe-feedback.css',
  shadow: true,
})
export class GrpsixRecipeFeedback {

  @Prop() recipeName: string;

  @State() message: string = "";
  @State() value: string;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
    this.message = "Dein persönliches Feedback wurde gespeichert";
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
        <div class="container-fluid" id="container1">
        <div id="newsletter">
          <h2>Beurteilung des Rezeptes {this.recipeName}</h2>
          <p>Gebe hier deine persönliche Bewertung zu dem Rezept {this.recipeName} ab und schaue diese später nochmals an</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>

            <div class="form-group">
              <p>Anlass</p>
              <input type="text" value={this.value} class="form-control" id="nameFeld" placeholder="für Hochzeiten, Kindergeburtstage, etc." required></input>
            </div>

            <div class="form-group">
              <p>Bewertung</p>
              <input type="text" value={this.value} class="form-control" id="emailFeld" placeholder="" required></input>
            </div>

            <div class="form-group">
              <p>Zeitaufwand</p>
              <input type="Checkbox" value={this.value} id="checkboxTime" class="checkboxTime"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
              <input type="Checkbox" value={this.value} id="emailFeld"></input>
              
                <div class="box1">5min.</div>
                <div class="box2">30min.</div>
                <div class="box3">1h</div>
              
            </div>

            <div class="checkbox">
              <input type="range" value={this.value} id="Datenschutz" required></input>
              <label htmlFor="Datenschutz"></label>
            </div>

            <button class="form-control" id="thumbsUp"><ion-icon name="thumbs-up-sharp"></ion-icon></button>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            
            <button class="form-control" id="thumbsDown"><ion-icon name="thumbs-down-sharp"></ion-icon></button>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

            <div>{this.message}</div>
          
          </form>
        </div>
        </div>
        </slot>
      </Host>
    );
  }

}
