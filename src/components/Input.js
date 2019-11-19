/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from '../styles/inputStyles.module.scss';
import attachButton from '../assets/attach.svg';
import sendButton from '../assets/send.svg';
import geoButton from '../assets/geo.svg';

export default function Input(props) {
	const { onChange, onSend, onLocation, value } = props;

	return (
		<div className={inputStyles.container}>
			<input
				className={inputStyles.input}
				onChange={onChange}
				placeholder="Input something..."
				type="text"
				value={value}
			/>
			<div className={inputStyles.buttons}>
				<div className={inputStyles.button}>
					<img src={attachButton} alt="Attachment button" />
				</div>
				<div
					onClick={onLocation}
					className={`${inputStyles.geo} ${inputStyles.button}`}
				>
					<img src={geoButton} alt="Location button" />
				</div>
				<div onClick={onSend} className={inputStyles.button}>
					<img src={sendButton} alt="Send button" />
				</div>
			</div>
		</div>
	);
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSend: PropTypes.func.isRequired,
	onLocation: PropTypes.func.isRequired,
};
