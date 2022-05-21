import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'grpsix-socialmedia',
  styleUrl: 'grpsix-socialmedia.css',
  shadow: true,
})
export class GrpsixSocialmedia {


  componentDidLoad() {
  }

  render() {
    return (
      <Host>
        <span class="social">
        <span class="social-container">
        <span class="herzLogo">
          <a href='https://www.mosbach.dhbw.de/'><img src= "herz.png"/></a> 
          </span>
          <span class="emailLogo">
          <a href='https://www.mosbach.dhbw.de/international/de/kontakt/'><img src= "email.png"/></a>
          </span>
          <span class="facebookLogo">
          <a href='https://de-de.facebook.com/dhbwmosbach.home/'><img src= "facebook.png"/></a>
          </span>
          <span class="instagramLogo">
          <a href='https://www.instagram.com/dhbw.mosbach/?hl=de'><img src= "instagram.png"/></a>
          </span>
          <span class="twitterLogo">
          <a href='https://twitter.com/onlinewerkdhbw'><img src= "twitter.png"/></a>
          </span>
        </span>
      </span>
      </Host>
    );
  }

}
