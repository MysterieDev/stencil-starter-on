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
  @State() selectValue: string;

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid')
    }
  }

  private messageClick = () => {
    this.message = "- Danke, dass du dich für unseren Newsletter entschieden hast -";
    //alert ("- Danke, dass du dich für unseren Newsletter entschieden hast -");
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
              <input class="form-control" id="nameFeld" placeholder="Dein Name"></input>
            </div>
            <div class="form-group">
              <input type="email" value={this.value} class="form-control" id="emailFeld" placeholder="Deine Email-Adresse"></input>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="Datenschutz"></input>
              <label htmlFor="Datenschutz">  Ich habe die Datenschutzerklärung zur Kenntnis genommen.</label>
            </div>

            <button class="form-control" id="anmeldebtn" onClick={this.messageClick}>Jetzt Anmelden</button>

            <div>{this.message}</div>
          
          </form>
        </div>
        </div>

        </slot>
      </Host>
    );
  }

}