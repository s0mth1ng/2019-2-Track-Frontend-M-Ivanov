/* eslint-disable global-require,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import headerStyles from '../../styles/headerStyles.module.css'
import chatStorage from '../../constants/chatStorage'

export default function Header(props) {
	function save() {
		const newInfo = {
			fullName: props.fullName,
			userName: props.userName,
			bio: props.bio,
		}
		localStorage.removeItem(chatStorage.USER_STORAGE)
		localStorage.setItem(chatStorage.USER_STORAGE, JSON.stringify(newInfo))
	}

	return (
		<div className={headerStyles.container}>
			<Link to="/" className={`back-button ${headerStyles.button}`}>
				<img src={require('../../assets/back.png')} alt="Back button" />
			</Link>
			<div className={headerStyles.name}>Edit Profile</div>
			<div onClick={save} className={`save-button ${headerStyles.button}`}>
				<img src={require('../../assets/done.png')} alt="Done button" />
			</div>
		</div>
	)
}

Header.propTypes = {
	fullName: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
}
