import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import CityList from "../components/CityList";
import City from "../components/City"

export const history = createBrowserHistory();

export default function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<CityList/>
				</Route>
				<Route path="/city/:id">
					<City/>
				</Route>
			</Switch>
		</Router>
	);
}
