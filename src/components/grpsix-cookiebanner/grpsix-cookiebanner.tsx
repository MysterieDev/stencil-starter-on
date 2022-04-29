import { Component, Host, h, Prop} from '@stencil/core';

//let cookiebanner:HTMLElement = 

@Component({
  tag: 'grpsix-cookiebanner',
  styleUrl: 'grpsix-cookiebanner.css',
  shadow: true,
})
export class GrpsixCookiebanner {
  @Prop() cookiebanner:any = document.getElementById("cookiePopup");
  
  
  render() {
    return (
      <Host>
          <div class="wrapperCookiebanner">
            <div id="cookiePopup">
                <img src='Cookie.png' />
              <p>
                Unsere Website verwendet Cookies, um Ihnen das Surfen zu erleichtern und relevante Informationen zu liefern. 
                Bevor Sie unsere Website weiter nutzen, erklären Sie sich mit unserer <a href="ON-your-styleguide/datenschutz.html">Datenschutzerklärung und Cookie-Richtlinien </a>einverstanden.
              </p>
              <button onClick={this.clickAccept} id="acceptCookie">akzeptieren</button>
            </div>
          </div>
        <slot></slot>
      </Host>
    );
    
  }
  clickAccept (){
    this.cookiebanner.style.display = "none";
    console.log("Wenigstens ich werde angezeigt…");
  };
}

