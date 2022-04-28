import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pop-card',
  styleUrl: 'pop-card.css',
  shadow: true,
})
export class PopCard {

  @Prop () popyName :string;

  @Prop () properties :Array<{property: string, property2? :string, property3? :string}> = [{property: 'hi'}];

  render() {
    return (
      <Host>
        <div class="cardHeader">
          <h2>{this.popyName}</h2>
        </div>
        <div class="imgContainer">
          <img src="sweet_popy.png"/>
        </div>
        <div class="footer">
        <h3 class="popyName">Sweet Popy</h3>
            <ul>
              {this.properties.map(prop => 
                <li>{prop}</li>
              )}
            </ul>
        </div>
      </Host>
    );
  }

}
