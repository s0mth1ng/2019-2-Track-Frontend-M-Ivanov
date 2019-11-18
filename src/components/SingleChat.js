import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import singleChatStyles from '../styles/singleChatStyles.module.css';
import defaultProfileImage from '../assets/avatar.png';

export default function SingleChat(props) {
	const {
		id,
		avatar,
		name,
		lastMessageContent,
		lastMessageTime,
		counter,
	} = props;
	const statusStyle = [{ display: 'none' }, { display: 'block' }];

	return (
		<Link to={`/chat/${id}`} className={singleChatStyles.container}>
			<div className={singleChatStyles.avatar}>
				<img src={avatar} alt="Profile" />
			</div>
			<div className={singleChatStyles.content}>
				<div className={singleChatStyles.name}>{name}</div>
				<div className={singleChatStyles.lastMessage}>{lastMessageContent}</div>
			</div>
			<div className={singleChatStyles.status}>
				<div className={singleChatStyles.time}>{lastMessageTime}</div>
				<div
					style={statusStyle[counter > 0 ? 1 : 0]}
					className={singleChatStyles.counter}
				>
					{counter}
				</div>
				<div
					style={statusStyle[counter < 0 ? 1 : 0]}
					className={singleChatStyles.read}
				/>
			</div>
		</Link>
	);
}

SingleChat.propTypes = {
	id: PropTypes.number.isRequired,
	lastMessageContent: PropTypes.string.isRequired,
	lastMessageTime: PropTypes.string.isRequired,
	counter: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string,
};

SingleChat.defaultProps = {
	avatar: `${defaultProfileImage}`,
};
