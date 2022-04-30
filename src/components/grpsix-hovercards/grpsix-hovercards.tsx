import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-hovercards',
  styleUrl: 'grpsix-hovercards.css',
  shadow: true,
})
export class GrpsixHovercards {
@Prop() headline_h1:string;
@Prop() headline_h2:string;
@Prop() description_text:string;
@Prop() image:any;
  render() {
    return (
      <Host>
        <div class="hovercard">
          <div class="card">
            <div class="front-page">
              {this.image && <img>{this.image}</img>}
            </div>
          <div class="back-page">
            {this.headline_h1 && <h1>{this.headline_h1}</h1>}
            {this.headline_h2 && <h2>{this.headline_h2}</h2>}
            {this.description_text && <p>{this.description_text}</p>}
          </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
