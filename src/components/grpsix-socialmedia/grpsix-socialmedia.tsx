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
          <span class="mdi mdi-24px mdi-dark mdi-cards-heart">
          <a href='https://www.mosbach.dhbw.de/'></a>
          </span>
          <span class="mdi mdi-24px mdi-dark mdi-email">
          <a href='https://www.mosbach.dhbw.de/international/de/kontakt/'></a>
          </span>
          <span class="mdi mdi-24px mdi-dark mdi-facebook">
          <a href='https://de-de.facebook.com/dhbwmosbach.home/'></a>
          </span>
          <span class="mdi mdi-24px mdi-dark mdi-instagram">
          <a href='https://www.instagram.com/dhbw.mosbach/?hl=de'></a>
          </span>
          <span class="mdi mdi-24px mdi-dark mdi-twitter">
          <a href='https://twitter.com/onlinewerkdhbw'></a>
          </span>
        </span>
      </span>
      </Host>
    );
  }

}
