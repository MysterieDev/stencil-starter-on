import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-footer',
  styleUrl: 'grpsix-footer.css',
  shadow: true,
})
export class GrpsixFooter {
  @Prop() image = 'logo.jp';

  componentDidLoad() {
  }

  render() {
    return (
      <Host>
        <span class="footer">
        <span class="footer-container">
          <span class="footer-subcontainer">
            <a class="footer-subcontainer-href" href="#">IMPRESSUM</a>
            <a class="footer-subcontainer-href" href="#">DATENSCHUTZERKLÄRUNG</a>
          </span>
          <span class="footer-subcontainer">
            <img class="footer-subcontainer-img"> 
            <a href='https://de.freepik.com/vektoren/blume'>Blume Vektor erstellt von Marifdez - de.freepik.com</a></img>
          </span>
          <span class="footer-subcontainer">
            <span>Kontaktiere uns: fragenan@foodblog.de</span>
          </span>
        </span>
      </span>
      </Host>
    );
  }

}
