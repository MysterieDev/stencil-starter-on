import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'grpsix-brightnessslider',
  styleUrl: 'grpsix-brightnessslider.css',
  shadow: true,
})
export class GrpsixBrightnessslider {

  @Prop() container : HTMLElement = document.body;
  @State() val : number;
  @Prop() slider : HTMLElement = document.querySelector("input[type='range']");
  
  changeBrightness(event : Event){
    console.log("Kommt an")
    event.preventDefault();
    let val = (event.target as HTMLInputElement).value;
    console.log(val);
    this.container.setAttribute("style", "filter: brightness("+val+"%);");
  }

  render() {
    return (
      <Host>
        <div class="brightness-div" id="label-container">
          <p>💡</p>
        </div>
        <div class="brightness-div" id="slider-container">
          <input type="range" id="brightness-range" min="10" max="100" value="50" step="1.0" onChange={(event) => this.changeBrightness(event)}/>
        </div>
        <slot></slot>
      </Host>
    );
  }
}