import { Component, Host, h, Prop } from '@stencil/core';

let componentElement:ShadowRoot;
let closeButton:HTMLElement;
let acceptButton:HTMLElement;
let banner:HTMLDivElement;

@Component({
  tag: 'cookie-banner',
  styleUrl: 'cookie-banner.css',
  shadow: true,
})
export class CookieBanner {

  @Prop() header:string;
  @Prop() text:string;
  @Prop() buttontext:string;
  @Prop() linkguide:string;
  @Prop() link:string;

  linkGuide() {
    window.open(this.link);
  }

  render() {
    return (
      <Host>
        <div class="container">
            <button id="closeButton" class="buttons">&#10005;</button>
              <p class="heading">{this.header && <p>{this.header}</p>}</p>
                <p>{this.text && <p>{this.text}</p>}</p>
              <p onClick={() => this.linkGuide()}>{this.linkguide && <p class="link">{this.linkguide}</p>}</p>
            <button id="acceptButton" class="buttons">{this.buttontext && <p>{this.buttontext}</p>}</button>
        </div>
      </Host>
    );
  }
  componentDidLoad() {
    Initialization();
  }
}

function Initialization() {
  componentElement =  document.querySelector("cookie-banner").shadowRoot;
  closeButton = componentElement.querySelector("#closeButton");
  acceptButton = componentElement.querySelector("#acceptButton");
  banner = componentElement.querySelector(".container");

  closeButton.addEventListener("click", removeBanner);
  acceptButton.addEventListener("click", removeBanner);
}

function removeBanner(){
 banner.style.display = "none";
}