import { Component, Host, h, getAssetPath } from '@stencil/core';

const appIcon = getAssetPath("/assets/appIcon.png")


@Component({
  tag: 'pop-download',
  styleUrl: 'pop-download.css',
  shadow: true,
})
export class PopDownload {
  render() {
    return (
      <Host>
        <pop-heading heading="PopUp - lad’ es dir herunter!"></pop-heading>
        <div class="downloadContainer">
          <img src={appIcon} alt="App Icon Popy"/>
          <pop-button text="Download" size="xxl" link="https://play.google.com/" color="blue"></pop-button>
        </div>
      </Host>
    );
  }
}
