import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'sl-hero-section',
  styleUrl: 'sl-hero-section.css',
  shadow: true,
})
export class SlHeroSection {
  @Prop({ reflect: true, mutable: true }) slHeroHeadline: string;
  @Element() el: HTMLElement;

  @State() remainingButtonClicked: boolean = false;

  getProducts() {
    const products = [];
    const productsSlot = this.el.querySelectorAll('[slot="sl-hero-product"]');
    if (productsSlot) {
      productsSlot.forEach(product => products.push(product.innerHTML));
    }
    return products;
  }

  getProductsContent() {
    const products = this.getProducts();
    let jsxContent = [];

    products.map(product => jsxContent.push(<li innerHTML={product}></li>));

    if (jsxContent.length >= 3) {
      jsxContent = jsxContent.filter((_product, index) => (index <= 1 ? true : false));
      jsxContent.push(
        <button
          id="addProductsButton"
          onClick={e => {
            this.remainingButtonClicked = true;
            const btn = e.target as HTMLButtonElement;
            btn.remove();
          }}
        >
          mehr anzeigen
        </button>,
      );
    } else {
      return jsxContent.map(el => el);
    }

    return jsxContent;
  }

  addRemainingProducts() {
    const jsxContent = [];
    this.getProducts()
      .filter((_pr, index) => {
        return index > 1 ? true : false;
      })
      .map(product => jsxContent.push(<li innerHTML={product}></li>));
    return jsxContent;
  }

  render() {
    return (
      <Host>
        <div class="sl-hero-section">
          <h2 id="sl-hero-headline">{this.slHeroHeadline.toUpperCase()}!</h2>
          <p>Wir bieten Ihnen die besten Produkte zum kleinen Preis. Alles für Ihre Vierbeiner zum kleinen Preis.</p>
        </div>
        <div id="sl-hero-products">
          <ul>
            {this.getProductsContent()}
            {this.remainingButtonClicked ? this.addRemainingProducts() : ''}
          </ul>
        </div>
      </Host>
    );
  }
}
