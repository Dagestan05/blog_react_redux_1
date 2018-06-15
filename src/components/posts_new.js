import React, {Component} from 'react';
import  {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';


class PostsNew extends Component{
  renderField(field){
    const classNameError = `form-group ${field.meta.touched && field.meta.error ? 'has-error' : ""}`
    return(
      <div className={classNameError}>
        <label htmlFor={field.name} className="control-label">{field.label}</label>
        <input
            {...field.input}
            className="form-control"
            type="text"/>
        <div className="text-danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }
  
  onSubmit(values){
    console.log(values)
  }
  
  render(){
    const {handleSubmit} = this.props;
    
    return(
      /*<form onSubmit={handleSubmit(data => )}>*/
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="post_content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors ={};
  //validate the inputs from 'values'
  if (!values.title || values.title.length < 3){
    errors.title = "Enter a Title that is more that is three chars long"
  }
  if (!values.categories){
    errors.categories = "Enter some categories"
  }
  if (!values.post_content){
    errors.post_content = "Enter some content please!"
  }
  
  //if errors is empty the form is valid to submit
  //if errors has any properties, reduf-form assumes form is invalid
  return errors;
}



export default reduxForm({
  validate: validate,
  form: 'PostsNewForm',
})(PostsNew);