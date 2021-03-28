import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sl-header',
  styleUrl: 'sl-header.css',
  shadow: true,
})
export class SlHeader {
  @Element() el: HTMLElement;
  @Prop({ reflect: true, mutable: true }) slDarkMode: boolean;
  getColorThemeClasses() {
    return ` ${this.slDarkMode ? 'sl-dark-header' : 'sl-light-header'}`;
  }

  getHeaderClasses() {
    return 'sl-header' + this.getColorThemeClasses();
  }

  getAllLinks() {
    const jsx = [];
    const slotEl = this.el.querySelector('[slot="sl-header-links"]');
    if (slotEl) {
      slotEl.querySelectorAll<HTMLLinkElement>('a').forEach(el => {
        jsx.push(
          <a href={el.href}>
            <p>{el.innerText}</p>
          </a>,
        );
      });
    }

    return jsx;
  }

  render() {
    return (
      <Host>
        <div class={this.getHeaderClasses()}>
          <div>
            <h3>LOGO</h3>
          </div>
          {this.getAllLinks().map(link => link)}
        </div>
      </Host>
    );
  }
}
