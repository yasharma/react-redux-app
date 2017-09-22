import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";

class UserDelete extends Component {
	render() {
		return (
			<Modal show={this.props.modal_delete.show}>
				<Modal.Header>
					<Modal.Title>
						Are you sure you want to delete <strong>{this.props.modal_delete.username}</strong>?
					</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button onClick={() => this.modalDeleteHide()}> No </Button>
					<Button onClick={() => this.userDelete()} bsStyle="primary"> Yes </Button>
				</Modal.Footer>
			</Modal>
		);
	}

	modalDeleteHide() {
		this.props.dispatch({type: 'users.modalDeleteHide'});
	}

	userDelete() {
		this.props.dispatch({
			type: 'users.delete',
			id: this.props.modal_delete.id
		});
		
		this.props.dispatch({type: 'users.modalDeleteHide'});
	}
}
function mapStateToProps(state) {
	let modal_delete;
	if (state.users.modal && state.users.modal.list_delete) {
		modal_delete = state.users.modal.list_delete;
	} else {
		modal_delete = {
			show: false,
			id: 0,
			username: ''
		};
	}
	return {modal_delete};
}
export default connect(mapStateToProps)(UserDelete);