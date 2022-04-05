import { Component, Host, h, Prop, Listen, Event, EventEmitter} from '@stencil/core';
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
  @Prop({mutable: true}) timesClicked = 1;

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

  private handleListClick(){
    this.timesClicked = this.timesClicked +1 ;
    if(this.timesClicked > 10){
      this.myCustomEvent.emit("test");
    }
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
