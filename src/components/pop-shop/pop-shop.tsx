import { Component, Host, h, getAssetPath, Element } from '@stencil/core';
const GangsterShirt = getAssetPath('/assets/shirt_gangsterpopy.jpg');
const LogoSnapback = getAssetPath('/assets/Snapback_logo-popup.jpg');
const PopUpShirt = getAssetPath('/assets/shirt_logo-popup_big.jpg');
const SweetSnapback = getAssetPath('/assets/Snapback_sweetpopy.jpg');
const LogoShirt = getAssetPath('/assets/shirt_logo-popup.jpg');

@Component({
  tag: 'pop-shop',
  styleUrl: 'pop-shop.css',
  shadow: true,
})
export class PopShop {
  @Element() public element: HTMLElement;

  componentDidLoad() {
    const previousButton = this.element.shadowRoot.querySelector('#prev');
    const nextButton = this.element.shadowRoot.querySelector('#next');
    previousButton.addEventListener('click', setPreviousImage);
    nextButton.addEventListener('click', setNextImage);
    const shopImage = this.element.shadowRoot.getElementById('mainImage');
    const prevShopImage = this.element.shadowRoot.getElementById('prevImage');
    const nextShopImage = this.element.shadowRoot.getElementById('nextImage');
    let currentImage = 3;

    function setPreviousImage() {
      if (currentImage > 1) {
        currentImage--;
        setShopImage();
      } else {
        currentImage = 5;
        prevShopImage.setAttribute('src', `${SweetSnapback}`);
        shopImage.setAttribute('src', `${LogoShirt}`);
        nextShopImage.setAttribute('src', `${GangsterShirt}`);
      }
    }

    function setNextImage() {
      if (currentImage < 5) {
        currentImage++;
        setShopImage();
      } else {
        currentImage = 1;
        prevShopImage.setAttribute('src', `${LogoShirt}`);
        shopImage.setAttribute('src', `${GangsterShirt}`);
        nextShopImage.setAttribute('src', `${LogoSnapback}`);
      }
    }

    function setShopImage() {
      switch (currentImage) {
        case 1:
          prevShopImage.setAttribute('src', `${LogoShirt}`);
          shopImage.setAttribute('src', `${GangsterShirt}`);
          nextShopImage.setAttribute('src', `${LogoSnapback}`);
          break;
        case 2:
          prevShopImage.setAttribute('src', `${GangsterShirt}`);
          shopImage.setAttribute('src', `${LogoSnapback}`);
          nextShopImage.setAttribute('src', `${PopUpShirt}`);
          break;
        case 3:
          prevShopImage.setAttribute('src', `${LogoSnapback}`);
          shopImage.setAttribute('src', `${PopUpShirt}`);
          nextShopImage.setAttribute('src', `${SweetSnapback}`);
          break;
        case 4:
          prevShopImage.setAttribute('src', `${PopUpShirt}`);
          shopImage.setAttribute('src', `${SweetSnapback}`);
          nextShopImage.setAttribute('src', `${LogoShirt}`);
          break;
        case 5:
          prevShopImage.setAttribute('src', `${SweetSnapback}`);
          shopImage.setAttribute('src', `${LogoShirt}`);
          nextShopImage.setAttribute('src', `${GangsterShirt}`);
          break;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class="carousel">
          <div class="shopSide">
            <button class="carouselButton prev" id="prev">&#8656;</button>
            <img src={LogoSnapback} class="previewImage" id="prevImage" />
          </div>
          <div id="mainImageFrame">
            <img src={PopUpShirt} id="mainImage"/>
            <div>
              <h3>PopUp Shirt</h3>
              <p>19,99 €</p>
              <p>S, M, L</p>
              <p>Luftig, locker, leicht - wie dein Lieblingspopcorn</p>
              <pop-button>In den Warenkorb</pop-button>
            </div>
          </div>
          <div class="shopSide">
            <img src={SweetSnapback} class="previewImage" id="nextImage" />
            <button class="carouselButton next" id="next">&#8658;</button>
          </div>
        </div>
      </Host>
    );
  }
}
