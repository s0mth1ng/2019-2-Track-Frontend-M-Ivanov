import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from '../styles/inputStyles.module.css';
import attachButton from '../assets/attach.png';

export default function Input(props) {
	const { onChange, value } = props;

	return (
		<div className={inputStyles.container}>
			<div className={inputStyles.attach}>
				<img
					style={{ height: '5vh', transform: 'rotate(90deg)' }}
					src={attachButton}
					alt="Attachment button"
				/>
			</div>
			<input
				className={inputStyles.input}
				onChange={onChange}
				placeholder="Input something..."
				type="text"
				value={value}
			/>
		</div>
	);
}

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
