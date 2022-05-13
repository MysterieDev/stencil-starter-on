import { Component, Host, h, Prop, getAssetPath, Listen, Element } from '@stencil/core';
const HighscoreGif = getAssetPath("/assets/popy-animation-highscore.gif");
const HighscoreJpg = getAssetPath("/assets/popy-animation-highscore.jpg");
const JumpGif = getAssetPath("/assets/popy-animation-jump.gif");
const JumpJpg = getAssetPath("/assets/popy-animation-jump.jpg");
const PlatformGif = getAssetPath("/assets/popy-animation-platform.gif");
const PlatformJpg = getAssetPath("/assets/popy-animation-platform.jpg");

@Component({
  tag: 'pop-animated-card',
  styleUrl: 'pop-animated-card.css',
  shadow: true,
})
export class PopAnimatedCard {

    @Prop() step: number;

    @Element() private element: HTMLElement;
    
    @Listen("mouseover")
      mouseoverListener() {
        const image = this.element.shadowRoot.querySelector(".image");
        image.setAttribute("src", `${this.checkAnimation()}`);
    }

    @Listen("mouseleave")
      mouseleaveListener() {
        const image = this.element.shadowRoot.querySelector(".image");
        image.setAttribute("src", `${this.checkImage()}`);
    }
    
    componentDidLoad() {
      if (this.step === 2) {
        const cardBody = this.element.shadowRoot.querySelector(".cardBody");
        cardBody.classList.add("polygon2");
        cardBody.classList.remove("polygon1");
      }
    }

    private checkStep() {
        switch (this.step){
            case 1: 
                return "Schritt 1: Platziere Plattformen";
            case 2:
                return "Schritt 2: Sende Popy in die Höhe!";
            case 3:
                return "Schritt 3: Knacke deinen Highscore";
        }
    }

    private checkStepDescription() {
        switch (this.step){
            case 1: 
                return "In PopUp kannst du Plattformen platzieren, um Popy zu helfen!";
            case 2:
                return "Schleudere Popy mit deinen Plattformen in die Höhe!";
            case 3:
                return "Je höher Popy es schafft, desto mehr Punkte kannst du sammeln!";
        }
    }
    
    private checkImage() {
      switch(this.step) {
        case 1:
          return PlatformJpg;
        case 2:
          return JumpJpg;
        case 3:
          return HighscoreJpg;
      }
    }

    private checkAnimation() {
      switch(this.step) {
        case 1:
          return PlatformGif;
        case 2:
          return JumpGif;
        case 3:
          return HighscoreGif;
      }
    }

  render() {
    return (
      <Host>
        <div class="cardBody polygon1">
            <h3>{this.checkStep()}</h3>
            <img class="image" src={this.checkImage()}></img>
            <p>{this.checkStepDescription()}</p>
        </div>        
      </Host>
    );
  }

}