import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from '../styles/headerStyles.module.css';

function ChatListHeader() {
	return (
		<div className={headerStyles.container}>
			<div className={headerStyles.appName}>Weather App</div>
		</div>
	);
}

export default ChatListHeader;
