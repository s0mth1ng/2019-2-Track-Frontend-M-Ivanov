import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/messageStyles.module.css';

export default function Message(props) {
	const { type, watched, content, time } = props;

	let statusStyle = { display: 'none' };
	if (type === 'sent' && !watched) {
		statusStyle = { display: 'block' };
	}
	return (
		<div className={`${styles.container} ${styles[type]}`}>
			<div className={styles.content}>{content}</div>
			<div className={styles.status}>
				<div style={statusStyle} className={styles.read} />
				<div className={styles.time}>{time}</div>
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
