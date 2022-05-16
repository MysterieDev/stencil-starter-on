import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
  assetsDirs: ['assets'],
})
export class FooterComponent {
  @Prop() image = 'image.png';

  componentDidLoad() {
  }

  render() {
    return (
      <span class="footer">
        <span class="footer-container">
          <span class="footer-subcontainer">
            <a class="footer-subcontainer-href" href="#">IMPRESSUM</a>
            <a class="footer-subcontainer-href" href="#">DATENSCHUTZERKLÄRUNG</a>
          </span>
          <span class="footer-subcontainer">
            <img class="footer-subcontainer-img" src={getAssetPath(`./assets/${this.image}`)}></img>
          </span>
          <span class="footer-subcontainer">
            <span>Kontaktiere uns: fragenan@foodblog.de</span>
          </span>
        </span>
      </span>
    );
  }
}