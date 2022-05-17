import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
//JS 

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private testTsx() {
    return <span>Max Mustermann</span>
  }

  render() {
    return <div>Hello, World! I'm {this.getText().length > 0 ? this.getText() : this.testTsx()}</div>;
  }
}
