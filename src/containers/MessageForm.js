/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-typos */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import messageFormStyles from '../styles/messageFormStyles.module.css';
import Input from '../components/Input';
import Message from '../components/Message';
import chatStorage from '../constants/chatStorage';

export default function MessageForm(props) {
	const localStorageName = `${chatStorage.MESSAGES_STORAGE}_${props.chatId}`;
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
		};
	}

	function convertToComponent(object) {
		return <Message
			key={object.key}
			content={object.content}
			time={object.time}
			watched={object.watched}
			type={object.type} />;
	}

	function getState() {
		const messagesFromLS = JSON.parse(localStorage.getItem(localStorageName)) || [];
		return messagesFromLS.map(convertToComponent);
	}

	function pushMessagesToLS(newMessages) {
		localStorage.removeItem(localStorageName);
		localStorage.setItem(localStorageName, JSON.stringify(newMessages.map(convertToObject)));
	}

	function submit(e) {
		e.preventDefault();
		const newMessage = <Message
			key={messagesCounter}
			content={value}
			time={new Date().toLocaleTimeString(navigator.language, {
				hour: '2-digit',
				minute: '2-digit',
			})}
			watched={false}
			type="sent" />;
		const newMessages = [...messages, newMessage];
		updateMessages(newMessages);
		updateValue('');
		pushMessagesToLS(newMessages);
		messagesCounter += 1;
	}

	function onChange(e) {
		updateValue(e.target.value);
	}

	return (
		<form onSubmit={submit} className={messageFormStyles.container}>
			<div className={messageFormStyles.messageForm}>
				{messages}
			</div>
			<Input onChange={onChange} value={value} />
		</form>
	);
}

MessageForm.propTypes = {
	chatId: PropTypes.number.isRequired,
};