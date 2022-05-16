import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'grpsix-herobanner',
  styleUrl: 'grpsix-herobanner.css',
  shadow: false,
})
export class GrpsixHerobanner {

  @Prop() imageSrc: string;
  @Prop() imageAltText: string;
  @Prop() text: string;
  @Prop() heading: string;
  @Prop() linkText: string;
  @Prop() linkHref: string;

  render() {
    return (
      <Host>
        <div class="container-fluid m-0 p-0 position-relative is-stretch row align-content-center grpsix-herobanner-wrapper">
          <img class="p-0" src={this.imageSrc} alt={this.imageAltText} />
          <div class="grpsix-overlay-grey"></div>
          <div class="position-absolute text-center">
            { this.heading &&
              <h1 class="grpsix-herobanner-heading">{this.heading}</h1>
            }
            { this.text &&
              <p class="grpsix-herobanner-text">{this.text}</p>
            }
            { this.text && 
               <a class="btn btn-primary" href={this.linkHref}>{this.linkText}</a>
            }
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
