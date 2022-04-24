import { Component, Host, h, } from '@stencil/core';

@Component({
  tag: 'grpsix-newsletter',
  styleUrl: 'grpsix-newsletter.css',
  shadow: true,
})
export class GrpsixNewsletter {


  render() {
    return (
      <Host>
        <div class="container-fluid">
        <div id="newsletter">
          <h2>Unser Newsletter</h2>
          <p>Hier bekommst du jede Woche tolle Rezepte und praktische Tipps!</p>
          <form>
            <div class="form-group">
              <input class="form-control" id="nameFeld" placeholder="Dein Name"></input>
            </div>
            <div class="form-group">
              <input class="form-control" id="emailFeld" placeholder="Deine Email-Adresse"></input>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="Datenschutz"></input>
              <label htmlFor="Datenschutz">  Ich habe die Datenschutzerklärung zur Kenntnis genommen.</label>
            </div>

            <button class="form-control" id="anmeldebtn">Jetzt Anmelden</button>
            
          </form>
        </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
