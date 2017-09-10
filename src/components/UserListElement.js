import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
export default class UserListElement extends Component {
	render() {
		const user = this.props.user;
		return (
			<tr>
			  <td># {user.id}</td>
			  <td>{user.username}</td>
			  <td>{user.job}</td>
			  <td>
			    <a href={`user-edit/${user.id}`}> 
			    	<Button bsSize="xsmall">
			    		Edit <Glyphicon glyph="edit"/>
			    	</Button> 
			    </a>
			  </td>
			  <td>  
			    <Button bsSize="xsmall" data-id={user.id} data-username={user.username}> 
			    	Delete <Glyphicon glyph="trash"/>
			    </Button>
			  </td>
			</tr>
		);
	}
}

UserListElement.propTypes = {
	user : PropTypes.object.isRequired
}