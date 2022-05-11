import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'grpsix-header',
  styleUrl: 'grpsix-header.css',
  shadow: true,
})
export class ExpNavbar {
  @Prop() navLinksJson: string;
  @Prop() contactBtnLabel: string;
  @Prop() contactBtnHref: string;
  @Prop() isUnderpage: boolean;

  @Watch('navLinksJson')
  handleNavLinksJsonChanged(){
    this.convertNavJson();
  }

  @State() navlinks: Array<{name: string, href: string}> = [];

  componentWillLoad(){
    this.convertNavJson();
  }

  convertNavJson(){
    this.navlinks =  JSON.parse(this.navLinksJson);
  }

  willShowContactBtn(){
    if(this.contactBtnHref && this.contactBtnLabel){
      return true
    }
    else{
      return false;
    }
  }

  render() {
    return (
      <Host>
        <div class={this.isUnderpage ? "navwrapper dark-mode" : "navwrapper"}>
        <img class="foodblogLogo" src="logo.jpg" alt="Logo des Foodblogs"></img>
        <nav>
          <ul class="nav_links">
            {this.navlinks.map(navlink => (
              <li>
                <a class={this.isUnderpage && "dark-mode-typo"} href={navlink.href}>{navlink.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        {
          this.willShowContactBtn() &&
          <a href="#" class="cta">
          <button type="button" name="button">
            Contact
          </button>
        </a>
        }
        </div>
      </Host>
    );
  }
}
