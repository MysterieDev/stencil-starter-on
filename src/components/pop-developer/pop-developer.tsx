import { Component, Host, h, Prop, getAssetPath, State, Watch } from '@stencil/core';

@Component({
  tag: 'pop-developer',
  styleUrl: 'pop-developer.css',
  shadow: true,
})
export class PopDeveloper {
  @Prop() namesJson: string;

  @State() names: Array<string> = [];

  @Watch('namesJson')
  handleNamesJsonChanged(){
    this.convertJson()
  }

  componentWillLoad(){
    this.convertJson()
  }

  convertJson(){
    this.names = JSON.parse(this.namesJson);
  }

  render() {
    return (
      <Host>
        <pop-heading heading="PopUp - die Schöpfer"></pop-heading>
        <ul>
          {this.names.map(devName => (
            <li class="devCard">
              <img class="devPic" src={getAssetPath(`/assets/popy-${devName}.png`)} alt="Popy Dev" />
              <span class="devName">{devName.charAt(0).toUpperCase() + devName.slice(1)}</span>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
