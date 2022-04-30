import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'grpsix-brightnessslider',
  styleUrl: 'grpsix-brightnessslider.css',
  shadow: true,
})
export class GrpsixBrightnessslider {

  @Prop() container : HTMLElement = document.body;
  @State() val : number;
  value: any;

  changeBrightness(e){
    console.log("Kommt an")
    e.preventDefault();
    let val = this.value;
    console.log(val);
    {/*this.container.style.filter = "brightness() setAttribute("style", "filter: brightness("+val+"%);");*/}
  }

  render() {
    return (
      <Host>
        <div class="brightness-div" id="label-container">
          <p>💡</p>
        </div>
        <div class="brightness-div" id="slider-container">
          <input type="range" id="brightness-range" min="10" max="100" value="50" onChange={(e) => this.changeBrightness(e)}/>
        </div>
        <slot></slot>
      </Host>
    );
  }
}

{/*} else {
  divElem.style.filter = `brightness(${slider.value}%)`;
*/}

