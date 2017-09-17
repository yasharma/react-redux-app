import React from 'react';
import Home from '../pages/Home';
import UserEdit from '../pages/UserEdit';
import NotFound from '../pages/NotFound';

import { Switch, Route } from 'react-router-dom';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/user-edit',
		component: UserEdit
	},
	{
		component: NotFound
	}
];

/*
We can use the<Switch> component to group <Route>s. 
The <Switch> will iterate over its children elements (the routes) and 
only render the first one that matches the current pathname.
*/

const Router = () => (
	<Switch>
		{routes.map((route, index) => (
			<Route 
				key={index}
				path={route.path}
				exact={route.exact}
				component={route.component}
			/>
		))}
	</Switch>
);

export default Router;