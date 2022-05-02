import { Component, h, Host, Prop, Element } from '@stencil/core';
import  BaeckereiLogo  from "../../assets/logo_maester.svg";

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
    }

    private checkLogo(){
        switch (this.supporter){
            case 1:
                return BaeckereiLogo;
        }
    }

    private checkHeading(){
        switch (this.supporter){
            case 1:
                return "BÄCKEREI MÄSTER";
        }
    }

    private checkText(){
        switch (this.supporter){
            case 1:
                return "Bäste Backwaren im ganzen Odenwald. Seit drei Generationen backen wir täglich für Sie!";
        }
    }
    render() {
        return (
            <Host>
                <div class="card">
                    <div class="content front">
                        <img class="logo" src={this.checkLogo()} />
                    </div>
                    <div class="content back">
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