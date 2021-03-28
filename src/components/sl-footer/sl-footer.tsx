import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sl-footer',
  styleUrl: 'sl-footer.css',
  shadow: true,
})
export class SlFooter {
  @Prop({ reflect: true, mutable: true }) slDatenschutz: string;
  @Prop({ reflect: true, mutable: true }) slImpressum: string;
  @Prop({ reflect: true, mutable: true }) slDarkMode: boolean;

  getFooterClasses() {
    return 'sl-footer ' + this.hasDarkModeClasses();
  }

  hasDarkModeClasses() {
    return this.slDarkMode ? 'sl-dark-mode' : '';
  }

  render() {
    return (
      <Host>
        <div class={this.getFooterClasses()}>
          <slot name="sl-column1">
            <h1>hello world!</h1>
          </slot>
          <slot name="sl-column2">
            <h1>hello world!</h1>
          </slot>
          <div>
            <p>
              {' '}
              <a class={this.hasDarkModeClasses()} href={this.slDatenschutz ?? '#'}>
                zum Datenschutz
              </a>
            </p>
            <p>
              <a class={this.hasDarkModeClasses()} href={this.slImpressum ?? '#'}>
                {' '}
                zum Impressum
              </a>
            </p>
          </div>
        </div>
      </Host>
    );
  }
}
