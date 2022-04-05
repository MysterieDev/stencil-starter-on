import { Component, Host, h, State, Element } from '@stencil/core';

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

  @Element() el: HTMLOnTodoListElement;

  toggleTodoCompleted(todo: {task: string, completed: boolean}){
    const index = this.todos.findIndex((listEntry)=>
      listEntry.task === todo.task);
    !true
    this.todos[index].completed = !this.todos[index].completed;
    this.todos = [...this.todos]; // for change detection
  }

  handleAddTodo(){
    const input = this.el.shadowRoot.getElementById('myInput') as HTMLInputElement;
    if(!input.value){
      alert('Please enter a todo');
    }
    const isAlreadyInList = this.todos.findIndex(
      (todoEl) => todoEl.task === input.value
      ) !== -1
    if(isAlreadyInList){
      alert("todo already exists")
    }
    else{
      this.todos = [...this.todos, {task: input.value, completed: false}]  // ADD todo
    }
    
  }

  deleteTodo(todo: {task: string, completed: boolean}){
    const todoIndex = this.todos.findIndex(
      (todoEl) => todoEl.task === todo.task
    )
    if(todoIndex !== -1){
      this.todos.splice(todoIndex, 1);
      this.todos = [...this.todos]; // for change detection
    }
  }

  render() {
    return (
      <Host>
        <div id="myDIV" class="header">
        <h2 style={{margin: '5px'}}>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." />
        <span onClick={()=>this.handleAddTodo()} class="addBtn">Add</span>
      </div>
        <ul>
          {
            this.todos.map((todo)=> 
            <li class={todo.completed && "checked"} 
            onClick={()=>this.toggleTodoCompleted(todo)}>
            {todo.task}
            <span onClick={()=>this.deleteTodo(todo)} class="close">x</span>
            </li>)
          }
        </ul>
      </Host>
    );
  }

}
