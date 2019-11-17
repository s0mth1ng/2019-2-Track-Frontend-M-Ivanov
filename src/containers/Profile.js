import React, { useState } from 'react';
import Header from '../components/Profile/Header';
import chatStorage from '../constants/chatStorage';
import styles from '../styles/profileStyles.module.css';

export default function Profile() {
	const userInfo = JSON.parse(
		localStorage.getItem(chatStorage.USER_STORAGE),
	) || {
		fullName: '',
		userName: '',
		bio: '',
	};

	const [fullName, updateFullName] = useState(userInfo.fullName);
	const [userName, updateUserName] = useState(userInfo.userName);
	const [bio, updateBio] = useState(userInfo.bio);

	function onChangeFullName(e) {
		updateFullName(e.target.value);
	}

	function onChangeUserName(e) {
		updateUserName(e.target.value);
	}

	function onChangeBio(e) {
		updateBio(e.target.value);
	}

	return (
		<div>
			<Header fullName={fullName} userName={userName} bio={bio} />
			<form className={styles.editForm}>
				<input
					onChange={onChangeFullName}
					className={styles.input}
					value={fullName}
					type="text"
					placeholder="Full Name"
				/>
				<input
					onChange={onChangeUserName}
					className={styles.input}
					value={userName}
					type="text"
					placeholder="Username"
				/>
				<textarea
					onChange={onChangeBio}
					className={styles.input}
					value={bio}
					placeholder="Write something about yourself"
				/>
			</form>
		</div>
	);
}
