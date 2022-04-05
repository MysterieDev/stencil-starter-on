import { Component, Host, h, Prop, Listen, Event, EventEmitter, Method, State, Watch} from '@stencil/core';
import { MyObj } from '../../utils/interfaces';


@Component({
  tag: 'on-test',
  styleUrl: 'on-test.css',
  shadow: true,
})
export class OnTest {

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


  render() {
    return (
      <Host>
         { this.isBold ? <strong><slot></slot></strong> : <slot></slot>}
         <ul onClick={()=>this.handleListClick()} >
         {
           this.myArray.map((entry)=>
            <li>{entry.toString()}</li>
           )
         }
         </ul>
         <p>{this.timesClicked}</p>
      </Host>
    );
  }

}
