import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Chats from '../containers/Chats';
import Profile from '../containers/Profile';
import MessageForm from '../containers/MessageForm';

export const history = createBrowserHistory();

export default function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<Chats />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/chat/:chatId">
					<MessageForm />
				</Route>
			</Switch>
		</Router>
	);
}
