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
        <div id="foodLogo">
        <img class="foodblogLogo" src="logo.png" alt="Logo des Foodblogs"></img>
        </div>

        <div class={this.isUnderpage ? "navwrapper under-page" : "navwrapper"}>
        <nav>
          <ul class="nav_links">
            {this.navlinks.map(navlink => (
              <li>
                <a class={this.isUnderpage && "under-page-typo"} href={navlink.href}>{navlink.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <input type="search" id="searchbar" placeholder='Suche'></input>
        {
          this.willShowContactBtn() &&
          <a href="#" class="cta">
          <button type="button" name="button">
            <ion-icon name="home"></ion-icon>
          </button>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </a>
        }
        </div>
      </Host>
    );
  }
}
