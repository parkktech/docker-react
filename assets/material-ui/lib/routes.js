import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={IndexPage} />
			<Route component={NotFoundPage} />
		</Switch>

	)
}

export default Routes
