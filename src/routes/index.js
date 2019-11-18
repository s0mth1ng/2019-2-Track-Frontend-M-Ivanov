import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from '../containers/App'

export const history = createBrowserHistory()

function Routes() {
	return (
		<HashRouter history={history}>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</HashRouter>
	)
}

export default Routes
