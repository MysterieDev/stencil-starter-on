import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-foodfacts',
  styleUrl: 'grpsix-foodfacts.css',
  shadow: true,
})
export class GrpsixFoodfacts {

  @Prop() imgSource: string;
  @Prop() imgAlternativetext: string;

  render() {
    return (
      <Host>
          <div id="cardWrapper">
          <div class="card">
            <img src={this.imgSource} class="card-img-top" alt={this.imgAlternativetext}></img>
            <div class="card-body">
            <h3 class="card-title">Card title</h3>
            <p class="card-text">Card Text</p>
            </div>
          </div>

          <div class="card">
            <img src={this.imgSource} class="card-img-top" alt={this.imgAlternativetext}></img>
            <div class="card-body">
            <h3 class="card-title">Card title</h3>
            <p class="card-text">Card Text</p>
            </div>
          </div>

          <div class="card">
            <img src={this.imgSource} class="card-img-top" alt={this.imgAlternativetext}></img>
            <div class="card-body">
            <h3 class="card-title">Card title</h3>
            <p class="card-text">Card Text</p>
            </div>
          </div>
          </div>
          <slot></slot>
      </Host>
    );
  }
}

