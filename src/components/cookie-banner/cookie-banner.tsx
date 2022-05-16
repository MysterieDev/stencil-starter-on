import { Component, Host, h, Prop } from '@stencil/core';

let body:HTMLElement;
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
  @Prop() bannertext:string;
  @Prop() buttontext:string;
  @Prop() linkguide?:string;
  @Prop() link?:string;

  linkGuidelines() {
    window.open(this.link);
  }

  render() {
    return (
      <Host>
        <div class="container">
          <div class="content">
            <button id="closeButton" class="buttons">&#10005;</button>
              <p class="heading">{this.header && <p>{this.header}</p>}</p>
                <p>{this.bannertext && <p>{this.bannertext}</p>}</p>
              <p onClick={() => this.linkGuidelines()}>{this.linkguide && <p class="link">{this.linkguide}</p>}</p>
            <button id="acceptButton" class="buttons">{this.buttontext && <p>{this.buttontext}</p>}</button>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }
  componentDidLoad() {
    defineObjectReferences();
    body = document.querySelector("body");
    body.style.overflowY="hidden";

  }
}

function defineObjectReferences() {
  componentElement =  document.querySelector("cookie-banner").shadowRoot;
  closeButton = componentElement.querySelector("#closeButton");
  acceptButton = componentElement.querySelector("#acceptButton");
  banner = componentElement.querySelector(".container");

  closeButton.addEventListener("click", removeCookieBanner);
  acceptButton.addEventListener("click", removeCookieBanner);
}

function removeCookieBanner(){
 banner.style.display = "none";
 body.style.overflowY="scroll";
}