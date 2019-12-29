import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CityHeader from './CityHeader';
import cityStyles from '../styles/cityStyles.module.css';
import ForecastItem from './ForecastItem';
import { key } from '../openweather/api';

export default function City(props) {
	let { id } = useParams();
	let [name, setName] = useState('');
	let [nowTemp, setNowTemp] = useState('');
	let [nowDescription, setNowDescription] = useState('');
	let [items, setItems] = useState([]);

	const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;

	// fetch(url)
	// 	.then(function (resp) {
	// 		return resp.json();
	// 	})
	// 	.then(function (data) {
	// 		if (data.cod !== '200') {
	// 			throw new Error("Invalid data");
	// 		}

	// 		setName(data.city.name);
	// 		setNowTemp(`${Math.round(data.list[0].main.temp - 273)} °C`);
	// 		setNowDescription(data.list[0].weather[0].main);
	// 		setItems(data.list.map((item, idx) => <ForecastItem
	// 			key={idx}
	// 			icon={`http://openweathermap.org/img/wn/${item.weather.icon}@2x.png`}
	// 			time={item.dt_txt}
	// 			description={item.weather.description}
	// 			temp={`${Math.round(item.main.temp - 273)} °C`} />));
	// 	})
	// 	.catch((e) => {
	// 		console.log(e);
	// 		alert(e.message);
	// 	});

	function getTime(ms) {
		const date = new Date(ms);
		const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return `${weekdays[date.getDay()]}`;
	}


	useEffect(() => {
		async function fetchData() {
			const result = await axios(url);
			const data = result.data;
			setName(data.city.name);
			setNowTemp(`${Math.round(data.list[0].main.temp - 273)} °C`);
			setNowDescription(data.list[0].weather[0].main);
			const items = [];
			for (let i = 0; i < data.list.length; i += 8) {
				items.push(data.list[i]);
			}
			setItems(items.map((item, idx) => <ForecastItem
				key={idx}
				icon={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
				time={getTime(item.dt * 60000)}
				description={item.weather[0].description}
				temp={`${Math.round(item.main.temp - 273)} °C`} />));
		}

		fetchData();
	}, [url]);

	return (
		<div className="mainPage">
			<CityHeader name={name} />
			<div className={cityStyles.container}>
				<div className={cityStyles.now}>
					<div className={cityStyles.status}>
						<div className={cityStyles.temp}>{nowTemp}</div>
						<div className={cityStyles.description}>{nowDescription}</div>
					</div>
				</div>
				<div className={cityStyles.forecast}>{items}</div>
			</div>
		</div>
	);
}
