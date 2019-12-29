import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CityHeader from './CityHeader';
import cityStyles from '../styles/cityStyles.module.css';
import ForecastItem from './ForecastItem';
import {key} from '../openweather/api';

export default function City(props) {
	let { id } = useParams();
	let [name, setName] = useState();
	let [nowTemp, setNowTemp] = useState();
	let [nowDescription, setNowDescription] = useState();
	let [items, setItems] = useState([]);

	const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;

	fetch(url)
		.then(function (resp) {
			return resp.json();
		})
		.then(function (data) {
			if (data.id == null) {
				throw new Error("Invalid data");
			}

			setName(data.city.name);
			setNowTemp(`${Math.round(data.list[0].main.temp - 273)} °C`);
			setNowDescription(data.list[0].weather[0].main);
			setItems(data.list.map((item, idx) => <ForecastItem
				key={idx}
				icon={`http://openweathermap.org/img/wn/${item.weather.icon}@2x.png`}
				time={item.dt_txt}
				description={item.weather.description}
				temp={item.main.temp} />))
		})
		.catch((e) => {
			console.log(e);
			alert(e.message);
		});

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
