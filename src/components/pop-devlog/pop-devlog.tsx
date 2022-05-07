import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-devlog',
  styleUrl: 'pop-devlog.css',
  shadow: true,
})
export class PopDevlog {

  @Prop() updatetitle: string;
  @Prop() rlsdate: string;
  @Prop() version: string;

  render() {
    return (
      <Host>
        <div class="singleupdate">
          <p id="updatetitle">{this.updatetitle}</p>
          <p id="version">v{this.version} | {this.rlsdate}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
