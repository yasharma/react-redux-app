import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
class UserListElement extends Component {
	render() {
		const user = this.props.user;
		return (
			<tr>
			  <td># {user.id}</td>
			  <td>{user.username}</td>
			  <td>{user.job}</td>
			  <td>
			  	<LinkContainer to={`user-edit/${user.id}`}>
			    	<Button bsSize="xsmall">
			    		Edit <Glyphicon glyph="edit"/>
			    	</Button> 
			    </LinkContainer>
			  </td>
			  <td>  
			    <Button bsSize="xsmall" data-id={user.id} data-username={user.username} onClick={(e) => this.modalDeleteShow(e)}> 
			    	Delete <Glyphicon glyph="trash"/>
			    </Button>
			  </td>
			</tr>
		);
	}

	modalDeleteShow(event) {
		this.props.dispatch({
			type: 'users.modalDeleteShow',
			id: event.target.dataset.id,
			username: event.target.dataset.username
		});
	}
}

UserListElement.propTypes = {
	user : PropTypes.object.isRequired
}

export default connect()(UserListElement);