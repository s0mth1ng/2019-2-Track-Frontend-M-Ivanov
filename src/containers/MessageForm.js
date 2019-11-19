/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-typos */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import messageFormStyles from '../styles/messageFormStyles.module.scss';
import Input from '../components/Input';
import Message from '../components/Message';
import chatStorage from '../constants/chatStorage';
import ChatHeader from '../components/ChatHeader';

export default function MessageForm() {
	const { chatId } = useParams();
	const chats = JSON.parse(localStorage.getItem(chatStorage.CHATS_STORAGE));
	const currentChat = chats[chatId];
	const localStorageName = `${chatStorage.MESSAGES_STORAGE}_${chatId}`;
	const [messages, updateMessages] = useState(getState());
	const [value, updateValue] = useState('');
	let messagesCounter = messages.length;

	function convertToObject(message) {
		return {
			key: message.key,
			content: message.props.content,
			time: message.props.time,
			watched: message.props.watched,
			type: message.props.type,
			url: message.props.url,
		};
	}

	function convertToComponent(object) {
		return (
			<Message
				key={object.key}
				content={object.content}
				time={object.time}
				watched={object.watched}
				type={object.type}
				url={object.url}
			/>
		);
	}

	function getState() {
		const messagesFromLS =
			JSON.parse(localStorage.getItem(localStorageName)) || [];
		return messagesFromLS.map(convertToComponent);
	}

	function pushMessagesToLS(newMessages) {
		localStorage.removeItem(localStorageName);
		localStorage.setItem(
			localStorageName,
			JSON.stringify(newMessages.map(convertToObject)),
		);
	}

	function createMessage(content, url) {
		return (
			<Message
				key={messagesCounter}
				content={content}
				time={new Date().toLocaleTimeString(navigator.language, {
					hour: '2-digit',
					minute: '2-digit',
				})}
				watched={false}
				type="sent"
				url={url}
			/>
		);
	}

	function sendMessage(newMessage) {
		const newMessages = [...messages, newMessage];
		updateMessages(newMessages);
		updateValue('');
		pushMessagesToLS(newMessages);
		messagesCounter += 1;
		setTimeout(scrollToBottom, 100);
		scrollToBottom();
	}

	function submit(e) {
		e.preventDefault();
		const content = value.trim();
		if (content === '') {
			return;
		}
		const newMessage = createMessage(value, '');
		sendMessage(newMessage);
	}

	function scrollToBottom() {
		const scrollDiv = document.getElementById('scrollDiv');
		scrollDiv.scrollIntoView({ behavior: 'smooth' });
	}

	function onChange(e) {
		updateValue(e.target.value);
	}

	function sendLocation() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const url = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
				const newMessage = createMessage('Я тут!', url);
				sendMessage(newMessage);
			});
		} else {
			alert('Геолокация недоступна(((((');
		}
	}

	return (
		<div className="mainPage">
			<ChatHeader
				name={currentChat.name}
				status="online"
				avatar={currentChat.avatar}
			/>
			<form onSubmit={submit} className={messageFormStyles.container}>
				<div className={messageFormStyles.messageForm}>
					<div className={messageFormStyles.messageContainer}>
						<div className={messageFormStyles.innerContainer}>
							{messages}
							<div id="scrollDiv" />
						</div>
					</div>
					<Input
						onLocation={sendLocation}
						onSend={submit}
						onChange={onChange}
						value={value}
					/>
				</div>
			</form>
		</div>
	);
}
