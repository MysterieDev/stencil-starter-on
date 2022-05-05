import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'pop-contactform',
  styleUrl: 'pop-contactform.css',
  shadow: true,
})
export class PopContactform {
  @Element() private element: HTMLElement;

  componentDidLoad() {
    const submit = this.element.shadowRoot.querySelector('.submitButton');
    const emailContent = this.element.shadowRoot.querySelector('#emailContent') as HTMLInputElement;
    const nameContent = this.element.shadowRoot.querySelector('#nameContent') as HTMLInputElement;
    const radioButton = this.element.shadowRoot.querySelector('#radioAccept') as HTMLInputElement;
    const warning = this.element.shadowRoot.querySelector("#warning") as HTMLParagraphElement;
    const warningWrapper = this.element.shadowRoot.querySelector("#warningWrapper") as HTMLDivElement;
    

    submit.addEventListener('click', () => {
      if (radioButton.checked && nameContent.value != "" &&  emailContent.value != '') {
        if(!emailContent.value.includes("@")){
          warning.innerText = "Keine gültige Email-Adresse!"
          warningWrapper.style.display = "flex";
          return
        }
        removeInput();
        
      }else{ 
        warning.innerText = "Bitte füllen sie alle Felder aus!"
        warningWrapper.style.display = "flex";
      } 
      
    });

    function removeInput() {
      nameContent.value = '';
      emailContent.value = '';
      radioButton.checked = false;
      warningWrapper.style.display = "none";
    }
  }

  render() {
    return (
      <Host>
        <pop-heading heading="PopUp - bleib Pop-up to date" id="Newsletter"></pop-heading>
        
        <br />
        <div class="Grid">
          <div class="nameInput">
            <input class="textinput" id="nameContent" type="text" placeholder="Name"></input>
          </div>
          <div class="acceptContainer">
            <input class="accept" id="radioAccept" type="radio"></input>
            <label> Ich habe die AGB's gelesen und <br />  bin damit einverstanden Emails zu erhalten.</label>
          </div>
          <div class="emailInput">
            <input class="textinput" id="emailContent" type="email" placeholder="Email"></input>
          </div>
          <pop-button size="s" text="Absenden" color="lightblue" class="submitButton"></pop-button>
        </div>
        <div id="warningWrapper">
          <p id="warning"></p>
        </div>
        
      </Host>
    );
  }
}
