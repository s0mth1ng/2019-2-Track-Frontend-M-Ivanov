/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageStyles.module.css';

export default function Message(props) {
	let statusStyle = { display: 'none' };
	if (props.type === 'sent' && !props.watched) {
		statusStyle = { display: 'block' };
	}
	return (
		<div className={`${styles.container} ${styles[props.type]}`}>
			<div className={styles.content}>
				{props.content}
			</div>
			<div className={styles.status}>
				<div style={statusStyle} className={styles.read} />
				<div className={styles.time}>
					{props.time}
				</div>
			</div>
		</div>
	);
}

Message.propTypes = {
	content: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	watched: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
};
