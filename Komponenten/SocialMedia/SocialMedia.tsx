import { Component, h } from '@stencil/core';

@Component({
  tag: 'social-component',
  styleUrl: 'social-component.css',
})
export class SocialComponent {
  componentDidLoad() {
  }

  render() {
    return (
      <span class="social">
        <span class="social-container">
          <span class="mdi mdi-24px mdi-dark mdi-cards-heart"></span>
          <span class="mdi mdi-24px mdi-dark mdi-email"></span>
          <span class="mdi mdi-24px mdi-dark mdi-facebook"></span>
          <span class="mdi mdi-24px mdi-dark mdi-instagram"></span>
          <span class="mdi mdi-24px mdi-dark mdi-twitter"></span>
        </span>
      </span>
    );
  }
}