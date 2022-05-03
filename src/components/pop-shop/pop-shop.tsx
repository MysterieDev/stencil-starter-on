import { Component, Host, h, getAssetPath, Element, State } from '@stencil/core';
const GangsterShirt = getAssetPath("/assets/shirt_gangsterpopy.jpg");
const LogoSnapback = getAssetPath("/assets/Snapback_logo-popup.jpg");
const PopUpShirt = getAssetPath("/assets/shirt_logo-popup_big.jpg");
const SweetSnapback = getAssetPath("/assets/Snapback_sweetpopy.jpg");
const LogoShirt = getAssetPath("/assets/shirt_logo-popup.jpg");


@Component({
  tag: 'pop-shop',
  styleUrl: 'pop-shop.css',
  shadow: true,
})
export class PopShop {

  @Element() public element: HTMLElement;

  @State() public previousButton: HTMLButtonElement;
  @State() public nextButton: HTMLButtonElement;

  componentWillLoad() {
    const previousButton = this.element.shadowRoot.querySelector('#prev');
    const nextButton = this.element.shadowRoot.querySelector('#next');
    console.log(nextButton, previousButton)
  }
  
  
  setImage() {
    let currentImage = 3;
    
    this.previousButton.addEventListener("click", () => {
      if(currentImage > 1) {
        currentImage++;
      }
    })

    this.nextButton.addEventListener("click", () => {
      if(currentImage < 5) {
        currentImage--;
      }
    })

    switch (currentImage) {
      case 1:
        return GangsterShirt;
      case 2:
        return LogoSnapback;
      case 3:
        return PopUpShirt;
      case 4:
        return SweetSnapback;
      case 5:
        return LogoShirt;
      }
    }

  render() {
    return (
      <Host>
          <div class="carousel">
            <button class="carouselButton prev" id="prev">zu</button>
            <button class="carouselButton next" id="next">vor</button>
            <img src={GangsterShirt} />
          </div>
      </Host>
    );
  }

}
