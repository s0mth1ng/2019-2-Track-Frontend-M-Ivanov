import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import singleCityStyles from '../styles/singleCityStyles.module.css';
import { key } from '../openweather/api';

export default function SingleCity(props) {
	const { id } = props;
	const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`;

	const [temp, setTemp] = useState(props.temp);
	const [wind, setWind] = useState(props.wind);
	const [iconUrl, setIconUrl] = useState(props.iconUrl);
	const [humidity, setHumidity] = useState(props.humidity);
	const [city, setCity] = useState(props.city);
	const [country, setCountry] = useState(props.country);

	useEffect(() => {
		async function fetchData() {
			const result = await axios(url);
			const data = result.data;
			const temp = Math.round(data.main.temp - 273);
			setTemp(`${temp} °C`);

			const wind = data.wind.speed;
			setWind(`Wind: ${wind} m/s`);

			const humidity = data.main.humidity;
			setHumidity(`Humidity: ${humidity}%`);

			const icon = data.weather[0].icon;
			setIconUrl(`http://openweathermap.org/img/wn/${icon}@2x.png`);

			const city = data.name;
			setCity(city);

			const country = data.sys.country;
			setCountry(country);
		}

		fetchData();
	}, [url]);


	return (
		<Link to={`/city/${id}`} className={singleCityStyles.container}>
			<div className={singleCityStyles.primary}>
				<div className={singleCityStyles.name}>
					<div className={singleCityStyles.city}>{city}</div>
					<div className={singleCityStyles.country}>{country}</div>
				</div>
				<div className={singleCityStyles.temp}>
					<img src={iconUrl} alt="Icon" />
					<div>{temp}</div>
				</div>
			</div>
			<div className={singleCityStyles.status}>
				<div>{wind}</div>
				<div>{humidity}</div>
			</div>
		</Link>
	);
}

SingleCity.propTypes = {
	id: PropTypes.number.isRequired,
};
