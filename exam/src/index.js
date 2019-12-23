import React from 'react';
import './index.css';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CityList from "./components/CityList";
import { Route, Switch, Router } from "react-router-dom"
import { createBrowserHistory } from 'history';
import City from "./components/City";

// ReactDOM.render(<App />, document.getElementById('root'));

export const history = createBrowserHistory();

render(
	<Router history={history}>
		<Switch>
			<Route exact path="/">
				<CityList />
			</Route>
			<Route exact path="/city/:id">
				<City/>
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root'),
);

serviceWorker.unregister();
