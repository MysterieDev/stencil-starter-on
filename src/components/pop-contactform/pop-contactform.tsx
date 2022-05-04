import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pop-contactform',
  styleUrl: 'pop-contactform.css',
  shadow: true,
})
export class PopContactform {
  render() {
    return (
      <Host>
        <div class="nameInput">         
          <input class="textinput" type="text" placeholder='Name'></input>
        </div>
        <div class="acceptContainer">
          <input class="accept" id="radioAccept" type="radio"></input>
          <label > Ich bin damit einverstanden Emails zu erhalten</label>
        </div>
        <div class="emailInput">        
          <input class="textinput" type="email" placeholder='Email'></input>
        </div>
        <pop-button size='s' text='Absenden' color='lightblue' class="SubmitButton"></pop-button>
      </Host>
    );
  }
}
