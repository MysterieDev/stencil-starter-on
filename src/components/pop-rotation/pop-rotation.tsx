import { Component, Host, h, getAssetPath, Element } from '@stencil/core';
const SweetPopy = getAssetPath("/assets/sweet_popy.png");
const CoolPopy = getAssetPath("/assets/cool_popy.png");
const BabyPopy = getAssetPath("/assets/baby_popy.png");

@Component({
  tag: 'pop-rotation',
  styleUrl: 'pop-rotation.css',
  shadow: true,
})
export class PopRotation {

  @Element() public element: HTMLElement;

  componentDidLoad() {
    const mainPopy = this.element.shadowRoot.getElementById("mainPopy");
    const leftPopy = this.element.shadowRoot.getElementById("leftPopy");
    const rightPopy = this.element.shadowRoot.getElementById("rightPopy");
    const heading = this.element.shadowRoot.getElementById("heading");
    const text = this.element.shadowRoot.getElementById("text");
    const difficulty = this.element.shadowRoot.getElementById("difficulty");

    leftPopy.addEventListener("click", changeToLeftPopy);
    rightPopy.addEventListener("click", changeToRightPopy);
    mainPopy.addEventListener("click", rotatePopys);

    function changeToLeftPopy() {
      const leftPopyImage = leftPopy.getAttribute("src");
      changeSettings(leftPopyImage);
    }

    function changeToRightPopy() {
      const rightPopyImage = rightPopy.getAttribute("src");
      changeSettings(rightPopyImage);
    }

    function changeSettings(selectedPopy) {
      switch (selectedPopy) {
        case SweetPopy:
          mainPopy.setAttribute("src", `${SweetPopy}`);
          leftPopy.setAttribute("src", `${CoolPopy}`);
          rightPopy.setAttribute("src", `${BabyPopy}`);
          heading.innerText = "Sweet Popy";
          text.innerText = "Mit basic kann man nie was falsch machen!"
          difficulty.innerText = "normal";
          break;
        case CoolPopy:
          mainPopy.setAttribute("src", `${CoolPopy}`);
          leftPopy.setAttribute("src", `${BabyPopy}`);
          rightPopy.setAttribute("src", `${SweetPopy}`);
          heading.innerText = "Cool Popy";
          text.innerText = "Cool, wie das Eis in deiner Cola!"
          difficulty.innerText = "schwer";
          break;
        case BabyPopy:
          mainPopy.setAttribute("src", `${BabyPopy}`);
          leftPopy.setAttribute("src", `${SweetPopy}`);
          rightPopy.setAttribute("src", `${CoolPopy}`);
          heading.innerText = "Baby Popy";
          text.innerText = "Lass dich nicht von ihrem Aussehen täuschen!"
          difficulty.innerText = "einfach";
      }
      mainPopy.style.transform = "";
    }

    function rotatePopys() {
      if (!(mainPopy.style.transform === "rotateZ(180deg)")) {  
        mainPopy.style.transform = "rotateZ(180deg)";
      } else {
        mainPopy.style.transform = "";
      }
    }
  }

  render() {
    return (
      <Host>
        <div id="popys">
          <div id="mainPopyFrame">
            <img id="mainPopy"src={SweetPopy} />
          </div>

          <div id="selectablePopys">
            <img id="leftPopy" src={CoolPopy} />
            <img id="rightPopy" src={BabyPopy} />
          </div>
        </div>
        <div id="description">
          <p id="heading">Sweet Popy</p>
          <div>
            <p id="text">Mit basic kann man nie was falsch machen!</p>
            <p>Mit ihm ist das Spiel <b id="difficulty">normal</b>.</p>
          </div>
        </div>
      </Host>
    );
  }

}
