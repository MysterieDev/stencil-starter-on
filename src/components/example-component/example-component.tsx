import { Component, Host, h, Prop, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.css',
  shadow: true,
})
export class ExampleComponent {

  @Prop() exampleProp: string;

  @Event() exampleEvent: EventEmitter<string>;

  @Listen("click")
  clickListener() {
    console.log("clicked");
  }

  @Method()
  async exampleToUpperCase() {
    this.exampleProp.toUpperCase;
  }
  
  exampleHandler(ev: MouseEvent) {
    console.log(ev)
    this.exampleEvent.emit("custom value");
  }

  componentDidLoad() {
    console.log("Component loaded");
  }

  render() {
    return (
      <Host>
        {/* https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator */}
        {this.exampleProp && <h2> {this.exampleProp} </h2>} 
        <slot></slot>
        <br />
        <button onClick={(ev)=>this.exampleHandler(ev)}>exampleEvent abgeben</button>
      </Host>
    );
  }

}
