/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import inputStyles from '../styles/inputStyles.module.scss';
import attachButton from '../assets/attach.svg';
import sendButton from '../assets/send.svg';
import geoButton from '../assets/geo.svg';
import startRecordingButton from '../assets/record.svg';
import stopRecordingButton from '../assets/redRecord.svg';

export default function Input(props) {
	const { onChange, onSend, onLocation, value, handleFiles, sendAudio } = props;
	const [isRecording, setRecordingFlag] = useState(false);

	async function getMedia(event) {
		const record = document.getElementById('media');
		if (!isRecording) {
			setRecordingFlag(true);
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
					const audioUrl = URL.createObjectURL(blob);
					sendAudio(audioUrl);
					if (blob.size < 4000000) {
						const data = new FormData();
						data.append('audio', blob);
						fetch('https://tt-front.now.sh/upload', {
							method: 'POST',
							body: data,
						})
							.then((response) => response.text())
							.then((info) => console.log(info));
					}
					setRecordingFlag(false);
				};

				mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
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

	function handle(event) {
		const { files } = event.target;
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
					className={inputStyles.input}
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
				<div id="media" onClick={getMedia} className={inputStyles.button}>
					<img
						style={isRecording ? { display: 'none' } : { display: 'inline' }}
						src={startRecordingButton}
						alt="Start record"
					/>
					<img
						style={isRecording ? { display: 'inline' } : { display: 'none' }}
						src={stopRecordingButton}
						alt="Stop record"
					/>
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
