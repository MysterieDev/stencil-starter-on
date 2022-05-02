import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-footer',
  styleUrl: 'pop-footer.css',
  shadow: true,
})
export class PopFooter {
  @Prop() footerlinks: Array <{name: string, href: string}> = [];

  render() {
    return (
      <Host>
        
          <ul class="footerlinks">
            {this.footerlinks.map(footerlink =>(
              <li>
                <a href={footerlink.href}>{footerlink.name}</a>
              </li>
            ))}

          </ul>
        
      </Host>
    );
  }

}
