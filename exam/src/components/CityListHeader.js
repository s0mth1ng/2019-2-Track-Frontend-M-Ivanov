import React from 'react';
import headerStyles from '../styles/headerStyles.module.css';
import menuButton from '../assets/menu.svg';
import findButton from '../assets/search.svg';

function ChatListHeader() {
	return (
		<div className={headerStyles.container}>
			<div className={headerStyles.button}>
				<img src={menuButton} alt="Menu button" />
			</div>
			<div className={headerStyles.appName}>Weather App</div>
			<div className={headerStyles.button}>
				<img src={findButton} alt="Find Button" />
			</div>
		</div>
	);
}

export default ChatListHeader;
