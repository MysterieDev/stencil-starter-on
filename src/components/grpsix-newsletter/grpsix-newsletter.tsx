import { Component, Host, h, Prop, } from '@stencil/core';

@Component({
  tag: 'grpsix-newsletter',
  styleUrl: 'grpsix-newsletter.css',
  shadow: true,
})

export class GrpsixNewsletter {

  @Prop() websiteName: string;
  
  private buttonClick = () => {
    alert(" - Danke, dass du dich für unseren Newsletter entschieden hast - ");
  }
  
  //let btn = document.getElementById("anmeldebtn");
  //let message = document.getElementById("alert");
  //btn.addEventListener("click", function(){
  //message.style.visibility = "visible";
  //});

  render() {
    return (
      <Host>
        <div class="container-fluid">
        <div id="newsletter">
          <h2>{this.websiteName} Newsletter</h2>
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

            <button class="form-control" id="anmeldebtn" onClick={this.buttonClick} >Jetzt Anmelden</button>

            <div id="alert"> - Danke, dass du dich für unseren Newsletter entschieden hast - </div>
            
          </form>
        </div>
        </div>

        <slot></slot>
      </Host>
    );
  }

}