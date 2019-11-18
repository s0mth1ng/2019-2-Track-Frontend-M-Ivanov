/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import chatsStyles from '../styles/chatsStyles.module.css';
import SingleChat from '../components/SingleChat';
import chatStorage from '../constants/chatStorage';
import ChatListHeader from '../components/ChatListHeader';
import createConversationButton from '../assets/create.svg';

export default function Chats() {
	const [chats, updateChats] = useState(getDefaultState());
	let chatsCounter = chats.length;

	function getDefaultChat(id) {
		return (
			<SingleChat
				key={id}
				id={id}
				lastMessageContent=""
				lastMessageTime=""
				counter={0}
				name={`Саня #${id + 1}`}
			/>
		);
	}

	function convertToObject(singleChat) {
		return {
			id: singleChat.props.id,
			name: singleChat.props.name,
			avatar: singleChat.props.avatar,
			lastMessageContent: singleChat.props.lastMessageContent,
			lastMessageTime: singleChat.props.lastMessageTime,
			counter: singleChat.props.counter,
		};
	}

	function convertToComponent(object) {
		const localStorageName = `${chatStorage.MESSAGES_STORAGE}_${object.id}`;
		const messagesFromLS =
			JSON.parse(localStorage.getItem(localStorageName)) || [];
		let lastMessageContent = '';
		let lastMessageTime = '';
		let counter = 0;
		if (messagesFromLS.length > 0) {
			const lastMessage = messagesFromLS[messagesFromLS.length - 1];
			lastMessageContent = lastMessage.content;
			lastMessageTime = lastMessage.time;
			if (lastMessage.type === 'sent') {
				counter = -1;
			} else {
				counter = 1;
			}
		}
		return (
			<SingleChat
				key={object.id}
				id={object.id}
				lastMessageContent={lastMessageContent}
				lastMessageTime={lastMessageTime}
				counter={counter}
				name={object.name}
				avatar={object.avatar}
			/>
		);
	}

	function getDefaultState() {
		const chatsFromLS =
			JSON.parse(localStorage.getItem(chatStorage.CHATS_STORAGE)) || [];
		return chatsFromLS.map(convertToComponent);
	}

	function pushChatsToLS(newChats) {
		localStorage.removeItem(chatStorage.CHATS_STORAGE);
		const chatsFromLS = newChats.map(convertToObject);
		localStorage.setItem(
			chatStorage.CHATS_STORAGE,
			JSON.stringify(chatsFromLS),
		);
	}

	function addChat() {
		const newChats = [...chats, getDefaultChat(chatsCounter)];
		updateChats(newChats);
		pushChatsToLS(newChats);
		chatsCounter += 1;
	}

	return (
		<div className="mainPage">
			<ChatListHeader />
			<div className={chatsStyles.container}>
				<div className={chatsStyles.chatsContainer}>{chats}</div>
				<div onClick={addChat} className={chatsStyles.create}>
					<img src={createConversationButton} alt="Create chat" />
				</div>
			</div>
		</div>
	);
}
