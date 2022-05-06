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
          <p>{this.updatetitle}</p>
          <p>{this.version}</p>
          <p>{this.rlsdate}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
