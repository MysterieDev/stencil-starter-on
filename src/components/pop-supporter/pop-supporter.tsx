import { Component, h, Host, Prop, Element, getAssetPath } from '@stencil/core';
const BaeckereiLogo = getAssetPath("/assets/logo_maester.svg");
const CinemaLogo = getAssetPath("/assets/logo-nacho-cinema.svg");

@Component({
  tag: 'pop-supporter',
  styleUrl: 'pop-supporter.css',
  shadow: true,
})
export class PopSupporter {

    @Prop() supporter : number;

    @Element() private element: HTMLElement;

    componentDidLoad() {
       const card = this.element.shadowRoot.querySelector('.card');
        console.log(card)
        card.addEventListener('click',() => {
            card.classList.toggle('flipped');        
        })   
        if (this.supporter === 2){
            const front = this.element.shadowRoot.querySelector('.front');
            const back = this.element.shadowRoot.querySelector('.back');
            front.classList.add("polygon2");
            front.classList.remove("polygon1");
            back.classList.add("polygon1");
            back.classList.remove("polygon2");
        }
    }

    private checkLogo(){
        switch (this.supporter){
            case 1:
                return BaeckereiLogo;
            case 2:
                return CinemaLogo;
            case 3: 
                return;
        }
    }

    private checkHeading(){
        switch (this.supporter){
            case 1:
                return "BÄCKEREI MÄSTER";
            case 2:
                return "NACHO CINEMA";
            case 3: 
                return "CHEESY JUNK";
        }
    }

    private checkText(){
        switch (this.supporter){
            case 1:
                return "Bäste Backwaren im ganzen Odenwald. Seit drei Generationen backen wir täglich für Sie!";
            case 2:
                return "Crunchige Snacks und weiche Sessel. Genießen Sie den nächsten Blockbuster bei uns!";
            case 3: 
                return "Sie lieben Kitsch und Völlerei, dann kommen Sie bei uns vorbei. Bis bald!";
        }
    }


    render() {
        return (
            <Host>
                <div class="card">
                    <div class="content front polygon1">
                        <img class="logo" src={this.checkLogo()} />
                    </div>
                    <div class="content back polygon2">
                        <div class="text">
                        <h3>{this.checkHeading()}</h3>
                        <p>{this.checkText()}</p>
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}