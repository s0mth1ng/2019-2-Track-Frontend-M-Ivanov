/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React from 'react'
import PropTypes from 'prop-types'
import inputStyles from '../styles/inputStyles.module.css'

export default function Input(props) {
	return (
		<div className={inputStyles.container}>
			<div className={inputStyles.attach}>
				<img
					style={{ height: '5vh', transform: 'rotate(90deg)' }}
					src={require('../assets/attach.png')}
					alt="Attachment button"
				/>
			</div>
			<input
				className={inputStyles.input}
				onChange={props.onChange}
				placeholder="Input something..."
				type="text"
				value={props.value}
			/>
		</div>
	)
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}
