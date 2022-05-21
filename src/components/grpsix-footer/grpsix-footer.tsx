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
            <a class="footer-subcontainer-href" href="#">DATENSCHUTZ</a>
          </span>
          <span>
          <div id="foodLogo">
          <img class="foodblogLogo" src="/ON-your-styleguide/logo.png" alt="Logo des Foodblogs"></img>
          </div>
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
