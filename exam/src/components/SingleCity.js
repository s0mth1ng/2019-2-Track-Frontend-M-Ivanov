import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import singleCityStyles from '../styles/singleCityStyles.module.css';

export default function SingleChat(props) {
	const {
		id,
		city,
		country,
	} = props;
	let [temp, setTemp] = useState('');
	let [wind, setWind] = useState('');
	let [iconUrl, setIconUrl] = useState('');
	let [pressure, setPressure] = useState('');
	let [humidity, setHumidity] = useState('');

	const key = '631984fd2bbdc7929248cde4bf5c1478';
	const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`;
	fetch(url)
		.then(function (resp) {
			return resp.json()
		})
		.then(function (data) {
			console.log(data);
			setTemp(`Температура: ${Math.round(data.main.temp - 273)} ℃`);
			setWind(`Скорость ветра: ${data.wind.speed} м/c`);
			setIconUrl(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
			setHumidity(`Влажность: ${data.main.humidity}%`);
		})
		.catch(() => {
		});

	return (
		<Link to={`/city/${id}`} className={singleCityStyles.container}>
			<div className={singleCityStyles.content}>
				<div className={singleCityStyles.name}>
					<div>{city}</div>
					<div>{country}</div>
				</div>
			</div>
			<div>
				<img src={iconUrl}/>
			</div>
			<div className={singleCityStyles.status}>
				<div>{temp}</div>
				<div>{wind}</div>
				<div>{humidity}</div>
			</div>
		</Link>
	);
}

SingleChat.propTypes = {
	id: PropTypes.number.isRequired,
	city: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};
