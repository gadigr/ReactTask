import React from 'react'
// import Footer from './Footer'
import AddForm from '../containers/AddForm'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {

  return (
    <div className="container">
    <div class="jumbotron">
  <h1>Reasonable Task App</h1>
  </div>
    <div className="row row-centered ">
    <h2>New Task</h2>
      <AddForm />
    </div>
  <div className="row">
        <div className="col-md-6">
          <h3>Pending Tasks</h3>
          <VisibleTodoList filter="SHOW_ACTIVE" />
        </div>
        <div className="col-md-6">
          <h3>Completed Tasks</h3>
          <VisibleTodoList filter="SHOW_COMPLETED" className="col-md-6" />
        </div>
    </div>
</div>
)}

export default App
