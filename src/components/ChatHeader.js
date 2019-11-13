/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/headerStyles.module.css';

export default function ChatHeader(props) {
	return (
		<div className={styles.container}>
			<div onClick={props.goBack.bind(this)} className={`back-button ${styles.button}`}>
				<img src={require('../assets/back.png')} alt="Back button" />
			</div>
			<div className={styles.account}>
				<div className={styles.avatar}>
					<img className={styles.profilePicture} src={props.avatar} alt="Profile" />
				</div>
				<div className="info">
					<div className={styles.name}>
						{props.name}
					</div>
					<div className={styles.status}>
						{props.status}
					</div>
				</div>
			</div>
			<div className={`options-button ${styles.button}`}>
				<img src={require('../assets/options.png')} alt="Options button" />
			</div>
		</div>
	);
}

ChatHeader.propTypes = {
	goBack: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
};
