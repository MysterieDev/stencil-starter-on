import { Component, Host, h, State, Prop} from '@stencil/core';

//let cookiebanner:HTMLElement = 

@Component({
  tag: 'grpsix-cookiebanner',
  styleUrl: 'grpsix-cookiebanner.css',
  shadow: true,
})
export class GrpsixCookiebanner {
  @State() hasAccepted: boolean = false;
  @Prop() linkDatenschutzrichtlinie: string;
  
  render() {
    return (
      <Host>
          <div class={this.hasAccepted?"nichtAnzeigen":"wrapperCookiebanner"}>
            <div id="cookiePopup">
                <img src='Cookie.png' />
              <p>
                Unsere Website verwendet Cookies, um Ihnen das Surfen zu erleichtern und relevante Informationen zu liefern. 
                Bevor Sie unsere Website weiter nutzen, erklären Sie sich mit unserer <a href={this.linkDatenschutzrichtlinie}>Datenschutzerklärung und Cookie-Richtlinien </a>einverstanden.
              </p>
              <button onClick={()=>this.clickAccept()} id="acceptCookie">akzeptieren</button>
            </div>
          </div>
        <slot></slot>
      </Host>
    );
    

  }
  clickAccept (){
    this.hasAccepted = true;
  };
}

