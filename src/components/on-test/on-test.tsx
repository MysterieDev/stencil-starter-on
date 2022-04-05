import { Component, Host, h, Prop, Listen, Event, EventEmitter, Method, State, Watch, Element} from '@stencil/core';
import { MyObj } from '../../utils/interfaces';


@Component({
  tag: 'on-test',
  styleUrl: 'on-test.css',
  shadow: true,
})
export class OnTest {

  @Element() el: HTMLOnTestElement;

  @Prop({ mutable: true}) isBold = false;
  @Prop() myArray = [1,2,3];
  @Prop() myObj: MyObj = {
    vorname: '',
    nachname: '',
    alter: 0
  }
  @State() timesClicked = 1;



  @Event({
    eventName: 'myCustomEvent'
  }) myCustomEvent: EventEmitter<string>;

  @Listen("click")
  handleClick(){
    this.isBold = !this.isBold;
  }

  @Listen("myCustomEvent")
  handleCustomEvent(e){
    console.log(e, e.detail)
  }

  @Method()
  async getComponentDimensions(){
    return this.el.getBoundingClientRect().height;
  }

  @Method()
  async countUpTimesClicked(){
    this.timesClicked++;
  }

  @Watch('timesClicked')
  handleTimesClickedWatcher(){
    console.log('timesClicked Changed, its :', this.timesClicked)
    if(this.timesClicked > 10){
      this.myCustomEvent.emit("test");
    }
  }

  private handleListClick(){
    this.timesClicked = this.timesClicked +1 ;
  }

  componentDidLoad(){
    console.log("component was loaded")
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  render() {
    return (
      <Host>
        <p>Dies ist ein Absatz</p>
         { this.isBold ? <strong><slot></slot></strong> : <slot></slot>}
         <ul >
         {
           this.myArray.map((entry)=>
            <li>{entry.toString()}</li>
           )
         }
         </ul>
         <button onClick={()=>this.handleListClick()}>{this.timesClicked} -- increment me by clicking</button>
      </Host>
    );
  }

}
