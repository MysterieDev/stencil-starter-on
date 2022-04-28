import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'grpsix-header',
  styleUrl: 'grpsix-header.css',
  shadow: true,
})
export class GrpsixHeader {
  @Prop() navLinksJson: string;
  @Prop() contactBtnLabel: string;
  @Prop() contactBtnHref: string;
  @Prop() isBackgroundPink: boolean;

  @Watch('navLinksJson')
  handleNavLinksJsonChanged() {
    this.convertNavJson();
  }

  @State() navlinks: Array<{ name: string; href: string }> = [];

  componentWillLoad() {
    this.convertNavJson();
  }

  convertNavJson() {
    this.navlinks = JSON.parse(this.navLinksJson);
  }

  willShowContactBtn() {
    if (this.contactBtnHref && this.contactBtnLabel) {
      return true;
    } else {
      false;
    }
  }

  render() {
    return (
      <Host>
        <div class={this.isBackgroundPink ? "navwrapper is-background-pink" : "navwrapper"}>
          <p> :)</p>
          <img class="logo" src="_images/logo.svg" alt="logo" />
          <nav>
            <ul class="nav_links">
              {this.navlinks.map(navlink => (
                <li>
                  <a class={this.isBackgroundPink && "is-backgroundbpink-typo"} href={navlink.href}>{navlink.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          {this.willShowContactBtn() && (
            <a href="#" class="cta">
              <button type="button" name="button">
                Contact
              </button>
            </a>
          )}
        </div>
      </Host>
    );
  }
}
