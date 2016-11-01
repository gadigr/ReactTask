import React, { Component } from 'react'

export default class TodoList extends Component {

  render() {
    return (
      <li  onClick={this.props.onClick} className="list-group-item">
        <h5>{this.props.asignee} - {this.props.due}</h5>
        <div>{this.props.description}</div>
        <div >Done? {this.props.completed ? 'YES!' : 'Not yet..'}</div>
      </li>
    )
  }
}
