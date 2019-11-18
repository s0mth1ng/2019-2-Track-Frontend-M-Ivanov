/* eslint-disable global-require */
import React from 'react';
import styles from '../styles/headerStyles.module.css';

function ChatListHeader() {
	return (
		<div className={styles.container}>
			<div className={`menu-button ${styles.button}`}>
				<img src={require('../assets/menu.png')} alt="Menu button" />
			</div>
			<div className={styles.name}>Fkontakte v1.0.1</div>
			<div className={`search-button ${styles.button}`}>
				<img src={require('../assets/search.png')} alt="Search button" />
			</div>
		</div>
	);
}

export default ChatListHeader;
