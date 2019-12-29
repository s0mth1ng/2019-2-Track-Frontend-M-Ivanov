import React from 'react';
import PropTypes from 'prop-types';
import forecast from '../styles/forecast.module.css';

export default function ForecastItem(props) {
	return (
		<div className={forecast.container}>
			<div className={forecast.info}>
				<img src={props.icon} alt="Icon" />
				<div className={forecast.label}>{props.time}</div>
				<div className={forecast.label}>{props.description}</div>
			</div>
			<div className={forecast.temp}>{props.temp}</div>
		</div>
	);
}

ForecastItem.propTypes = {
	icon: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	temp: PropTypes.string.isRequired,
};
