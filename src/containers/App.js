/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatListHeader from '../components/ChatListHeader';
import Chats from './Chats';
import MessageForm from './MessageForm';
import chatStorage from '../constants/chatStorage';

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.goBack = this.goBack.bind(this);
		this.goToChat = this.goToChat.bind(this);
		this.state = {
			chatHeader: '',
			chatListHeader: <ChatListHeader />,
			messageForm: '',
			chats: <Chats goToChat={this.goToChat} />,
		};
	}

	goBack(e) {
		this.setState({ chatHeader: '' });
		this.setState({ chatListHeader: <ChatListHeader /> });
		this.setState({ messageForm: '' });
		this.setState({ chats: <Chats goToChat={this.goToChat} /> });
	}

	goToChat(e) {
		const chats = JSON.parse(localStorage.getItem(chatStorage.CHATS_STORAGE));
		this.setState({
			chatHeader: <ChatHeader goBack={this.goBack} name={chats[e].name} status='online'
				avatar={chats[e].avatar} />,
		});
		this.setState({ chatListHeader: '' });
		this.setState({ messageForm: <MessageForm chatId={e} /> });
		this.setState({ chats: '' });
	}

	render() {
		return (
			<div className='mainPage'>
				{this.state.chatHeader}
				{this.state.chatListHeader}
				{this.state.messageForm}
				{this.state.chats}
			</div>
		);
	}
}

