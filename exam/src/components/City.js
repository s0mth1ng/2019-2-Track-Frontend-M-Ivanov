import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CityHeader from './CityHeader';
import cityStyles from '../styles/cityStyles.module.css';

export default function City(props) {
	let { id } = useParams();
	let [name, setName] = useState('');
	let [nowTemp, setNowTemp] = useState('');
	let [nowDescription, setNowDescription] = useState('');
	let [items] = useState([]);
	let [nowIconUrl, setNowIconUrl] = useState('');

	const key = '631984fd2bbdc7929248cde4bf5c1478';
	const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;

	fetch(url)
		.then(function(resp) {
			return resp.json();
		})
		.then(function(data) {
			setName(data.city.name);
			setNowIconUrl(
				`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`,
			);
			setNowTemp(`${Math.round(data.list[0].main.temp - 273)} °C`);
			setNowDescription(data.list[0].weather[0].main);
		})
		.catch((e) => {
			console.log(e);
			alert('Error!');
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
					<img src={nowIconUrl} alt="Icon" />
				</div>
				<div className={cityStyles.forecast}>{items}</div>
			</div>
		</div>
	);
}
