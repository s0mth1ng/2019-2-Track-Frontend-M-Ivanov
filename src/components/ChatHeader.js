import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/headerStyles.module.css';
import backButton from '../assets/back.png';
import optionsButton from '../assets/options.png';

export default function ChatHeader(props) {
	const { avatar, name, status } = props;

	return (
		<div className={styles.container}>
			<Link to="/" className={`back-button ${styles.button}`}>
				<img src={backButton} alt="Back button" />
			</Link>
			<div className={styles.account}>
				<div className={styles.avatar}>
					<img className={styles.profilePicture} src={avatar} alt="Profile" />
				</div>
				<div className="info">
					<div className={styles.name}>{name}</div>
					<div className={styles.status}>{status}</div>
				</div>
			</div>
			<div className={`options-button ${styles.button}`}>
				<img src={optionsButton} alt="Options button" />
			</div>
		</div>
	);
}

ChatHeader.propTypes = {
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
};
