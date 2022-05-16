import { Component, Host, Prop, h } from '@stencil/core';

//Übergaben als src Attribute
let imageReferences: string[]

//Links und Rechts Navigieren
let previous: HTMLImageElement;
let next: HTMLImageElement;

let previousImage: HTMLImageElement;
let activeImage: HTMLImageElement;
let nextImage: HTMLImageElement;

let componentElement: ShadowRoot;


//let carouselFrequency: number = 5000;

let currentImageNumber: number = 2;



@Component({
  tag: 'picture-carousel',
  styleUrl: 'picture-carousel.css',
  shadow: true,
})
export class PictureCarousel {

  @Prop() imgsrcs: string;
  @Prop() frequency: string;

  constructor() {
    imageReferences = this.imgsrcs.split("|");
    if (imageReferences.length < 3) {
      alert("mindestens 3 Bilder benötigt")
    }
    //carouselFrequency = parseInt(this.frequency) * 1000;
  }

  render() {
    return (
      <Host>
        <div id="carousel-frame" >
          <div class="button-container button-container-stop">
            <img src="./assets/picture-carousel/pause.png" class="carouselButton" id="stopCarouselButton"></img>
          </div>
          <div class="button-container button-container-prev">
            <img src="./assets/picture-carousel/arrow-left.png" class="carouselButton" id="previousImageButton"></img>
          </div>
          <div class="button-container button-container-next">
            <img src="./assets/picture-carousel/arrow-right.png" class="carouselButton" id="nextImageButton"></img>
          </div>
          <div id="carousel">
            <img class="image-carousel" id="prevImage"></img>
            <img class="image-carousel" id="activeImage"></img>
            <img class="image-carousel" id="nextImage"></img>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }
  componentDidLoad() {
    initializeCarousel()
  }
}

function initializeCarousel() {
  defineObjectReferences();
  addEventListeners();
  addImages();
}

function defineObjectReferences() {
  componentElement = document.querySelector("picture-carousel").shadowRoot;
  next = componentElement.querySelector("#nextImageButton");
  previous = componentElement.querySelector("#previousImageButton");

  previousImage = componentElement.querySelector("#prevImage");
  activeImage = componentElement.querySelector("#activeImage");
  nextImage = componentElement.querySelector("#nextImage");
}


function addEventListeners() {
  next.addEventListener("click", (event) => { buttonClick(event.target as HTMLImageElement, "+") });
  previous.addEventListener("click", (event) => { buttonClick(event.target as HTMLImageElement, "-") });
  //stop.addEventListener("click", startStopCarousel);
}

function addImages() {
  let arrayEntry: number = currentImageNumber
  let a: number = arrayEntry - 2;
  let b: number = arrayEntry - 1;
  let c: number = arrayEntry;

  switch (arrayEntry) {
    case 1:
      a = imageReferences.length - 1;
      b = 0;
      c = 1;
      break;
    case 0:
      a = imageReferences.length - 2;
      b = imageReferences.length - 1;
      c = 0;
      break;
  }

  previousImage.src = imageReferences[a]
  console.log(previousImage.src)
  activeImage.src = imageReferences[b]
  console.log(activeImage.src);
  nextImage.src = imageReferences[c]
  console.log(nextImage.src);

}


function changeCarousel(index: string) {
  if (index == "+" && currentImageNumber == imageReferences.length - 1) {
    currentImageNumber = 0;
  } else if (index == "-" && currentImageNumber == 0) {
    currentImageNumber = imageReferences.length - 1;
  } else {
    switch (index) {
      case "+":
        currentImageNumber++;
        break;
      case "-":
        currentImageNumber--;
        break;
    }
  }
}



function buttonClick(button: HTMLImageElement, direction: string) {
  button.style;
  addImages();
  changeCarousel(direction);
}