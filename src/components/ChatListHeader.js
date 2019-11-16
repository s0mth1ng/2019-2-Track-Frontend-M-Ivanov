/* eslint-disable global-require */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/headerStyles.module.css'

function ChatListHeader() {
	return (
		<div className={styles.container}>
			<Link to="/profile" className={`menu-button ${styles.button}`}>
				<img src={require('../assets/menu.png')} alt="Menu button" />
			</Link>
			<div className={styles.name}>Fkontakte v1.0.1</div>
			<div className={`search-button ${styles.button}`}>
				<img src={require('../assets/search.png')} alt="Search button" />
			</div>
		</div>
	)
}

export default ChatListHeader
