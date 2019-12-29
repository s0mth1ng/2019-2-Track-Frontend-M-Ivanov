import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CityList from './components/CityList';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import City from './components/City';
import AddCity from './components/AddCity';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './styles/globalStyles.module.css';

export const history = createBrowserHistory();

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(66, 165, 244)',
			contrastText: "white",
		},
	},
});

render(
	<MuiThemeProvider theme={theme}>
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<CityList />
				</Route>
				<Route exact path="/city/:id">
					<City />
				</Route>
				<Route exact path="/add">
					<AddCity />
				</Route>
			</Switch>
		</Router>
	</MuiThemeProvider>,
	document.getElementById('root'),
);

serviceWorker.unregister();
