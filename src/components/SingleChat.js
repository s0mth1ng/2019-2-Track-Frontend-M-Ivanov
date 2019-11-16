/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import singleChatStyles from '../styles/singleChatStyles.module.css'

export default function SingleChat(props) {
	const statusStyle = [{ display: 'none' }, { display: 'block' }]

	return (
		<Link to={`/chat/${props.id}`} className={singleChatStyles.container}>
			<div className={singleChatStyles.avatar}>
				<img style={{ height: '9vh' }} src={props.avatar} alt="Profile" />
			</div>
			<div className={singleChatStyles.content}>
				<div className={singleChatStyles.name}>{props.name}</div>
				<div className={singleChatStyles.lastMessage}>{props.lastMessageContent}</div>
			</div>
			<div className={singleChatStyles.status}>
				<div className={singleChatStyles.time}>{props.lastMessageTime}</div>
				<div style={statusStyle[props.counter > 0 ? 1 : 0]} className={singleChatStyles.counter}>
					{props.counter}
				</div>
				<div style={statusStyle[props.counter < 0 ? 1 : 0]} className={singleChatStyles.read} />
			</div>
		</Link>
	)
}

SingleChat.propTypes = {
	id: PropTypes.number.isRequired,
	lastMessageContent: PropTypes.string.isRequired,
	lastMessageTime: PropTypes.string.isRequired,
	counter: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string,
}

SingleChat.defaultProps = {
	avatar: `${require('../assets/avatar.png')}`,
}
