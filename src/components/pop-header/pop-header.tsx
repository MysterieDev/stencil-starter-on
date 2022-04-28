import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-header',
  styleUrl: 'pop-header.css',
  shadow: true,
})
export class PopHeader {
  @Prop() navlinks: Array <{name: string, href: string}> = [];

  render() {
    return (
      <Host>
        <nav>
          <ul class="headerlinks">
            {this.navlinks.map(navlink =>(
              <li>
                <a href={navlink.href}>{navlink.name}</a>
              </li>
            ))}

          </ul>
        </nav>
        
      </Host>
    );
  }

}
