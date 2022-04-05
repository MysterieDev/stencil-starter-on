import { Component, Host, h, Prop } from '@stencil/core';
import { MyObj } from '../../utils/interfaces';


@Component({
  tag: 'on-test',
  styleUrl: 'on-test.css',
  shadow: true,
})
export class OnTest {

  @Prop() isBold = false;

  @Prop() myArray = [1,2,3];

  @Prop() myObj: MyObj = {
    vorname: '',
    nachname: '',
    alter: 0
  }

  render() {
    return (
      <Host>
         { this.isBold ? <strong><slot></slot></strong> : <slot></slot>}
         <ul>
         {
           this.myArray.map((entry)=>
            <li>{entry.toString()}</li>
           )
         }
         </ul>
      </Host>
    );
  }

}
