import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import CityList from "../components/CityList";
import SingleCity from "../components/SingleCity";

export const history = createBrowserHistory();

export default function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<CityList/>
				</Route>
				<Route exact path="/city/:cityId">
				</Route>
			</Switch>
		</Router>
	);
}
