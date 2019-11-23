/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import inputStyles from '../styles/inputStyles.module.scss';
import attachButton from '../assets/attach.svg';
import sendButton from '../assets/send.svg';
import geoButton from '../assets/geo.svg';

export default function Input(props) {
	const { onChange, onSend, onLocation, value, handleFiles } = props;

	function selectFiles(e) {
		const fileInput = document.getElementById('fileInput');
		if (fileInput) {
			fileInput.click();
		}
		e.preventDefault();
	}

	function handle() {
		const fileInput = document.getElementById('fileInput');
		const { files } = fileInput;
		handleFiles(files);
	}

	function preventDefaults(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	function drop(e) {
		preventDefaults(e);
		const { files } = e.dataTransfer;
		handleFiles(files);
	}

	return (
		<div className={inputStyles.container}>
			<div
				className={inputStyles.dropArea}
				onDragOver={preventDefaults}
				onDragEnter={preventDefaults}
				onDrop={drop}
			>
				<input
					className={inputStyles.inputFiles}
					type="file"
					id="fileInput"
					multiple
					accept="image/*"
					style={{ display: 'none' }}
					onChange={handle}
				/>
				<input
					className={inputStyles.input}
					onChange={onChange}
					placeholder="Input something or drag images here"
					type="text"
					value={value}
				/>
			</div>
			<div className={inputStyles.buttons}>
				<div className={inputStyles.button}>
					<img
						onClick={selectFiles}
						src={attachButton}
						alt="Attachment button"
					/>
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
	handleFiles: PropTypes.func.isRequired,
};
