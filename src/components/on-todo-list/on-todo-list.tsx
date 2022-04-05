import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'on-todo-list',
  styleUrl: 'on-todo-list.css',
  shadow: true,
})
export class OnTodoList {

  @State() todos: Array<{task: string, completed: boolean}> = [
    {task: 'müll rausbringen', completed: false},
    {task: 'stencil lernen', completed: true},
  ];

  toggleTodoCompleted(todo: {task: string, completed: boolean}){
    const index = this.todos.findIndex((listEntry)=>
      listEntry.task === todo.task);
    !true
    this.todos[index].completed = !this.todos[index].completed;
    this.todos = [...this.todos];
  }

  render() {
    return (
      <Host>
        <div id="myDIV" class="header">
        <h2 style={{margin: '5px'}}>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span onClick={()=>{}} class="addBtn">Add</span>
      </div>
        <ul>
          {
            this.todos.map((todo)=> 
            <li class={todo.completed && "checked"} 
            onClick={()=>this.toggleTodoCompleted(todo)}>
            {todo.task}
            </li>)
          }
        </ul>
      </Host>
    );
  }

}
