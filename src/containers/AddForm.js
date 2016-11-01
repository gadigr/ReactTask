import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo} from '../actions/index';

class AddForm extends Component {
constructor(props){
  super(props)
    this.asigneesOptions = ['', 'Rick', 'Morty', 'Jessica'];
    this.onClickSave = this.onClickSave.bind(this);
}



onClickSave(values){
this.props.addTodo(values);
}

  render() {
        return (
          <form onSubmit={this.props.handleSubmit(this.onClickSave)} className="form-inline">
            <div>
              <label htmlFor="asignee">Asignee:</label>
              <Field  name="asignee" component="select" className="form-control">
              {this.asigneesOptions.map(asignee =>
              <option value={asignee} key={asignee}>{asignee}</option>)}
               </Field>
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field name="description" component="input" className="form-control" type="text"/>
            </div>
            <div>
              <label htmlFor="due">Due Date: </label>
              <Field name="due" component="input" type="date" className="form-control"/>
            </div>
            <button type="submit" disabled={this.props.pristine || this.props.submitting} >Submit</button>
            <button type="button" onClick={this.props.reset} disabled={this.props.pristine || this.props.submitting} >Clear Values</button>
          </form>
        );
      }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}


// Decorate the form component
AddForm = reduxForm({
  form: 'add'
})(AddForm);

// promote component to container
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
