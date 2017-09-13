import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Menu extends Component {
	render() {
		return (
			<Nav bsStyle="pills">
				<IndexLinkContainer to="/">
					<NavItem>Home</NavItem>
				</IndexLinkContainer>
			</Nav>
		);
	}
}

export default Menu;