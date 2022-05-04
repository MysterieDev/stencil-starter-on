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
        <div class="contactFormular">
        <label >Name:</label>
        <input class="textinput"  type="text"></input>
        
        <label >Email:</label>
        <input class="textinput" type="email"></input>
        </div>
        <div class="AcceptSubmit">
          <input class="accept" id="radioAccept" type="radio" >   </input>
          <label> Ich bin damit einverstanden Emails zu erhalten</label>
          <button class="SubmitButton">Absenden</button>
          
        </div>
      </Host>
    );
  }

}
