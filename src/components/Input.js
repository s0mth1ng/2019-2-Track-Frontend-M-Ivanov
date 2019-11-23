/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import inputStyles from '../styles/inputStyles.module.scss';
import attachButton from '../assets/attach.svg';
import sendButton from '../assets/send.svg';
import geoButton from '../assets/geo.svg';
import startRecording from '../assets/record.svg';
import stopRecording from '../assets/redRecord.svg';

export default function Input(props) {
	const { onChange, onSend, onLocation, value, handleFiles, sendAudio } = props;
	const [recordButton, setRecordButton] = useState(startRecording);

	async function getMedia() {
		const record = document.getElementById('record');
		if (!record) {
			return;
		}
		if (recordButton === startRecording) {
			setRecordButton(stopRecording);
			let stream = null;
			try {
				stream = await navigator.mediaDevices.getUserMedia({ audio: true });
				const mediaRecorder = new MediaRecorder(stream);
				record.onclick = () => {
					mediaRecorder.stop();
					stream.getTracks().forEach((track) => track.stop());
				};
				mediaRecorder.start();
				let chunks = [];

				mediaRecorder.onstop = () => {
					const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
					chunks = [];
					const audio = (
						<audio controls src={URL.createObjectURL(blob)}>
							<track default kind="captions" />
							Voice message
						</audio>
					);
					sendAudio(audio);
					setRecordButton(startRecording);
				};

				mediaRecorder.ondataavailable = (event) => chunks.push(event.data);
			} catch (err) {
				console.log(err);
			}
		} else {
			record.onclick = getMedia;
		}
	}

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
				<div onClick={onLocation} className={inputStyles.button}>
					<img src={geoButton} alt="Location button" />
				</div>
				<div id="record" onClick={getMedia} className={inputStyles.button}>
					<img src={recordButton} alt="Record" />
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
	sendAudio: PropTypes.func.isRequired,
};
