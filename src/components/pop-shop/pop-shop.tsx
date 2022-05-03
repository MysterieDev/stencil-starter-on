import { Component, Host, h, getAssetPath, Prop, Element } from '@stencil/core';
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

  @Prop() shop : any;

  @Element() private element: HTMLElement;
  
  componentDidLoad() {
  const buttons = this.element.shadowRoot.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button.closest("[data-carousel]")

      .closest("[data-carousel]")
      .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length -1
      if (newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  });
  }

  render() {
    return (
      <Host>
        <section aria-label="Newest Photos">
          <div class="carousel" data-carousel>
            <button class="carouselButton" data-carousel-button="prev">&#8656;</button>
            <button class="carouselButton" data-carousel-button="next">&#8658;</button>
            <ul data-slides>
              <li class="slide" data-active>
                <img src={GangsterShirt} alt="Shop Image #1"/>
              </li>
              <li class="slide">
                <img src={LogoSnapback} alt="Shop Image #2"/>
              </li>
              <li class="slide">
                <img src={PopUpShirt} alt="Shop Image #3"/>
              </li>
              <li class="slide">
                <img src={SweetSnapback} alt="Shop Image #4"/>
              </li>
              <li class="slide">
                <img src={LogoShirt} alt="Shop Image #5"/>
              </li>
            </ul>
          </div>
        </section>
      </Host>
    );
  }

}
