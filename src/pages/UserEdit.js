import React, { Component } from 'react';
import { PageHeader, Form, FormGroup, Col, Button, FormControl, Glyphicon, InputGroup, HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';

class UserEdit extends Component {
	form_type;
	constructor(props) {
		super(props);
		this.form_type = (props.initialValues.id > 0) ?'edit':'add';
		this.formSubmit = this.formSubmit.bind(this);
	}
  	render() {
    	return (
     		<div>
        		<PageHeader>{'edit' === this.form_type ? 'User Edit' : 'User Add'}</PageHeader>
        		<Form horizontal onSubmit={this.props.handleSubmit(this.formSubmit)}>
        			<Field name="username" component={UserEdit.renderUsername} />
        			<Field name="job" component={UserEdit.renderJob} />
        			<FormGroup>
        				<Col smOffset={2} sm={8}>
        					<Button type="submit" disabled={this.props.invalid || this.props.submitting}>Save User</Button>
        				</Col>
        			</FormGroup>
        		</Form>
      		</div>  
    	);
  	}
  	static renderUsername(props) {
  		return (
  			<FormGroup validationState={!props.meta.touched ? null : 
  				(props.meta.error ? 'error' : 'success')}>
  				<Col sm={2}> Username </Col>
  				<Col sm={8}> 
  					<FormControl {...props.input} id="username" type="text"
  						placeholder="Username" />
  						<FormControl.Feedback />
  						<HelpBlock>{props.meta.touched && props.meta.error ? props.meta.error : null}</HelpBlock>
  				</Col>
  			</FormGroup>
  		);
  	}
  	static renderJob(props) {
  		return (
  			<FormGroup>
  				<Col sm={2}> Job </Col>
  				<Col sm={8}> 
  					<InputGroup>
	  					<FormControl {...props.input} id="job" type="text"
	  						placeholder="Job" />
	  					<InputGroup.Addon>
	  						<Glyphicon glyph="briefcase" />
	  					</InputGroup.Addon>
  					</InputGroup>
  				</Col>
  			</FormGroup>
  		);
  	}

  	formSubmit(values) {
  		this.props.dispatch({
  			type: `users.${this.form_type}`,
  			id: values.id,
  			username: values.username,
  			job: values.job
  		});
  		this.props.dispatch(goBack());
  	}
}
UserEdit = reduxForm({
	form: 'user_edit',
	validate: (values) => {
		const errors = {};
		if(!values.username) {
			errors.username = 'Username is required';
		}
		return errors;
	}
})(UserEdit);

function mapStateToProps(state, own_props) {
	let form_data = {
		id: 0,
		username: '',
		job: ''
	};
	for (const user of state.users.list){
		if(user.id === Number(own_props.match.params.id)){
			form_data = user;
			break;
		}
	}
	return {
		initialValues: form_data
	};
}
export default connect(mapStateToProps)(UserEdit);