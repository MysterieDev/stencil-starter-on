import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';
const popUpLogo = getAssetPath("/assets/pop-up-logo.png")

@Component({
  tag: 'pop-introduction',
  styleUrl: 'pop-introduction.css',
  shadow: true,
})
export class PopIntroduction {

@Prop() introduction : any

  render() {
    return (
      <Host>
        <div class="frame">
        <img class="popUpLogo" src={popUpLogo}/>
        <pop-heading heading="PopUp - das ultimative Minispiel"></pop-heading>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
      </Host>
    );
  }

}
