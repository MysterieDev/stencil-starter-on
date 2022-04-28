import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'grpsix-newsletter',
  styleUrl: 'grpsix-newsletter.css',
  shadow: true,
})

export class GrpsixNewsletter {

  @Prop() websiteName: string;

  @State() message: string = "";
  @State() value: string;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
  }

  ckeckInputFunction(event) {
    this.value = event.target.value;
    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }else{
      this.message = "- Danke, dass du dich für unseren Newsletter entschieden hast -";
    }

  }

  private messageClickFunction = () => {
    this.message = "- Danke, dass du dich für unseren Newsletter entschieden hast -";
   }

  render() {
    return (
      <Host>
        <slot>
        <div class="container-fluid">
        <div id="newsletter">
          <h2>{this.websiteName} Newsletter</h2>
          <p>Hier bekommst du jede Woche tolle Rezepte und praktische Tipps!</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>

            <div class="form-group">
              <input type="text" value={this.value} class="form-control" id="nameFeld" placeholder="Dein Name" required></input>
            </div>

            <div class="form-group">
              <input type="email" value={this.value} class="form-control" id="emailFeld" placeholder="Deine Email-Adresse" required></input>
            </div>

            <div class="checkbox">
              <input type="checkbox" value={this.value} id="Datenschutz" required></input>
              <label htmlFor="Datenschutz">  Ich habe die Datenschutzerklärung zur Kenntnis genommen.</label>
            </div>

            <button class="form-control" id="anmeldebtn" onClick={this.messageClickFunction}>Jetzt Anmelden</button>

            <div>{this.message}</div>
          
          </form>
        </div>
        </div>

        </slot>
      </Host>
    );
  }

}
//<a href="https://www.mozilla.org/en-US/">Datenschutzerklärung</a>.