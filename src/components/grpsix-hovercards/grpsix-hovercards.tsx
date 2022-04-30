import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-hovercards',
  styleUrl: 'grpsix-hovercards.css',
  shadow: true,
})
export class GrpsixHovercards {
@Prop() headlineLarge:string;
@Prop() headlineMedium:string;
@Prop() descriptionText:string;
@Prop() imageSource:string;
@Prop() altText:string;
  render() {
    return (
      <Host>
        <div class="hovercard">
          <div class="card">
            <div class="front-page">
             <img src={this.imageSource} alt={this.altText}/>
            </div>
          <div class="back-page">
            {this.headlineLarge && <h1>{this.headlineLarge}</h1>}
            {this.headlineMedium && <h2>{this.headlineMedium}</h2>}
            {this.descriptionText && <p>{this.descriptionText}</p>}
          </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
