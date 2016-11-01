import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

  renderList() {
    return this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} onClick={()=>this.props.onTodoClick(todo.id)} />
    })
  }
  render() {
    return(
      <ul className="panel">
        {this.renderList()}
      </ul>
    )
  }
}
