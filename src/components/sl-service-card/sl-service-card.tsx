import { Component, Host, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'sl-service-card',
  styleUrl: 'sl-service-card.css',
  shadow: true,
})
export class SlServiceCard {
  @Prop({ reflect: true, mutable: true }) slLink: string;
  @Prop({ reflect: true, mutable: true }) slImgSrc: string;
  @Prop({ reflect: true, mutable: true }) slDarkMode: boolean;

  @Listen('mouseenter')
  handleMouseover() {
    this.slDarkMode = !this.slDarkMode;
  }

  @Listen('mouseleave')
  handleMouseleave() {
    this.slDarkMode = !this.slDarkMode;
  }
  getLinkContent() {
    return this.slLink ? (
      <a target="_blank" href={this.slLink}>
        <slot name="slLink">externer Link</slot>
      </a>
    ) : (
      ''
    );
  }

  getCardClasses() {
    const mode = this.slDarkMode ? 'sl-dark-card' : 'sl-light-card';
    const always = 'sl-card-style';
    return `${mode} ${always}`;
  }

  render() {
    return (
      <Host>
        <div class={this.getCardClasses()}>
          <h1>
            <slot name="slHeadline">Nicht fündig geworden?</slot>
          </h1>
          <p>
            <slot name="slContent">Kontaktieren Sie uns!</slot>
          </p>
          {this.slImgSrc ? <img class="sl-card-img" src={this.slImgSrc} /> : ''}
          {this.getLinkContent()}
        </div>
      </Host>
    );
  }
}
