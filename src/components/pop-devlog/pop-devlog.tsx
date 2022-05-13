import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'pop-devlog',
  styleUrl: 'pop-devlog.css',
  shadow: true,
})
export class PopDevlog {

  @Prop() updatetitle: string;
  @Prop() rlsdate: string;
  @Prop() version: string;
  @Prop() form?: string;

  @Element() private element: HTMLElement;

  componentDidLoad(){
    if(this.form == "middle"){
      const middlePolygon = this.element.shadowRoot.querySelector('.singleupdate');
      middlePolygon.classList.add('blogPolygon2');
    }
  }

  render() {
    return (
      <Host>
        <div class="singleupdate blogPolygon1">
          <p id="updatetitle">{this.updatetitle}</p>
          <p id="version">v{this.version} | {this.rlsdate}</p>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
