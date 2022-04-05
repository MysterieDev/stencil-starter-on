import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'on-todo-list',
  styleUrl: 'on-todo-list.css',
  shadow: true,
})
export class OnTodoList {

  render() {
    return (
      <Host>
        <div id="myDIV" class="header">
  <h2 style={{margin: '5px'}}>My To Do List</h2>
  <input type="text" id="myInput" placeholder="Title..." />
  <span onClick={()=>{}} class="addBtn">Add</span>
</div>
        <ul>
          <li>addTodo 1</li>
          <li>addTodo 1</li>
          <li>addTodo 1</li>
        </ul>
      </Host>
    );
  }

}
