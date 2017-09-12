export default function users(state = {}, action) {
	let new_state;
	switch(action.type) {
		case 'users.modalDeleteShow':
			new_state = JSON.parse(JSON.stringify(state));
			new_state.modal = new_state.modal ? new_state.modal : {};
			new_state.modal.list_delete = {
				show: true,
				id: action.id,
				username: action.username
			};
			return new_state;

		case 'users.modalDeleteHide':
			new_state = JSON.parse(JSON.stringify(state));
			
			new_state.modal.list_delete = {
				show: false,
				id: 0,
				username: 0
			};
			return new_state;

		case 'users.delete':
			new_state = JSON.parse(JSON.stringify(state));
			new_state.list.splice( new_state.list.findIndex( user => user.id === parseInt(action.id, 10) ), 1);
			return new_state;	

		default:
			return state;
	}
}