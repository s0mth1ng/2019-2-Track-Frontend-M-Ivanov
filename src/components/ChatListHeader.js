import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/headerStyles.module.css';
import menuButton from '../assets/menu.svg';
import searchButton from '../assets/search.svg';

function ChatListHeader() {
	return (
		<div className={styles.container}>
			<Link to="/profile" className={`menu-button ${styles.button}`}>
				<img src={menuButton} alt="Menu button" />
			</Link>
			<div className={styles.appName}>Fkontakte v1.0.1</div>
			<div className={`search-button ${styles.button}`}>
				<img src={searchButton} alt="Search button" />
			</div>
		</div>
	);
}

export default ChatListHeader;
