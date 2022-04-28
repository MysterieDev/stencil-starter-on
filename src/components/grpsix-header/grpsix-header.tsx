import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'grpsix-header',
  styleUrl: 'grpsix-header.css',
  shadow: true,
})
export class GrpsixHeader {
  @Prop() navLinksJson: string;

  @Watch('navLinkJson')
  handleNavLinksJsonChanged(){
    this.convertNavJson();
  }

  @State() navlinks: Array<{name: string, href: string}> = [];

  componentWillLoad(){
    this.convertNavJson();
  }

  convertNavJson(){
    this.navlinks = JSON.parse(this.navLinksJson);
  }


  render() {
    return (
      <Host>
        <p> :)</p>
        <img class="logo" src="_images/logo.svg" alt="logo" />
        <nav>
          <ul class="nav_links">
            {this.navlinks.map(navlink => (
              <li>
                <a href={navlink.href}>{navlink.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#" class="cta">
          <button type="button" name="button">
            Contact
          </button>
        </a>
      </Host>
    );
  }
}
