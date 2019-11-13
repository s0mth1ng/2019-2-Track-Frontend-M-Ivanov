import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../containers/App';

export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</Router>
	);
}

export default Routes;
