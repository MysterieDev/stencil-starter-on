import { Component, Host, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'grpsix-cookiebanner',
  styleUrl: 'grpsix-cookiebanner.css',
  shadow: true,
})
export class GrpsixCookiebanner {
  @Prop() cookieBanner: string;
  @State() visible: boolean = true;
  render() {
    return (
      <Host>
        <slot>
          <div id="cookiePopup">
              <img src='Cookie.png' />
            <p>
              Unsere Website verwendet Cookies, um Ihnen das Surfen zu erleichtern und relevante Informationen zu liefern. 
              Bevor Sie unsere Website weiter nutzen, erklären Sie sich mit unserer <a href="ON-your-styleguide/datenschutz.html">Datenschutzerklärung & Cookie-Richtlinien </a>einverstanden.
            </p>
            <button onClick={() => this.visible=false} id="acceptCookie">Akzeptieren</button>
          </div>
        </slot>
      </Host>
    );
  }
  if (visible = false) {
    visible
  }
//Funktionen  hier!!!
}
