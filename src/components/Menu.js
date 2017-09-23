import React, { Component } from 'react';
import {Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap';

class Menu extends Component {
	render() {
		return (
			<Nav bsStyle="pills">
				<IndexLinkContainer to="/">
					<NavItem>Home</NavItem>
				</IndexLinkContainer>
				<LinkContainer to="/add-user">
					<NavItem>
						Add User <Glyphicon glyph="plus-sign" />
					</NavItem>
				</LinkContainer>
			</Nav>
		);
	}
}

export default Menu;