import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import UserListElement from './UserListElement';
class UserList extends Component {
	render() {
		return (
			<Table bordered hover responsive striped>
			  <thead>
			    <tr>
			      <th>ID</th>
			      <th>Username</th>
			      <th>Job</th>
			      <th>Edit</th>
			      <th>Delete</th>
			    </tr>
			  </thead>
			  <tbody>
			    {this.props.users.map((user, index) => {
			      return (
			        <UserListElement key={user.id} user={user}/>
			      );
			    })}
			  </tbody>
			</Table>
		);
	}
}

function mapStateToStore(state) {
	return ({
		users: state.users
	})
}

export default connect(mapStateToStore)(UserList);