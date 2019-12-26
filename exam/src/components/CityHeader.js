import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/headerStyles.module.css';
import backButton from '../assets/back.svg';
import optionsButton from '../assets/options.svg';

export default function CityHeader(props) {
	const { name } = props;

	return (
		<div className={styles.container}>
			<Link to="/" className={`back-button ${styles.button}`}>
				<img src={backButton} alt="Back button" />
			</Link>
			<div className={styles.info}>
					<div className={styles.name}>{name}</div>
			</div>
			<img src={optionsButton} alt="Options button" />
		</div>
	);
}

CityHeader.propTypes = {
	name: PropTypes.string.isRequired,
};
