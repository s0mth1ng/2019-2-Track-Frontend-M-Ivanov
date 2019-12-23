import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import CityHeader from "./CityHeader";
import cityStyles from "../styles/cityStyles.module.css";

export default function City(props) {
	let {id} = useParams();
	let [name, setName] = useState('');
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
			setTemp(`Температура: ${Math.round(data.main.temp - 273)} ℃`);
			setWind(`Скорость ветра: ${data.wind.speed} м/c`);
			setIconUrl(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
			setHumidity(`Влажность: ${data.main.humidity}%`);
			setName(data.name);
		})
		.catch((err) => {
			console.log(err);
		});

	return (
		<div className="mainPage">
			<CityHeader name={name}/>
			<div className={cityStyles.container}>
				<div>
					<img src={iconUrl}/>
				</div>
				<div>{temp}</div>
				<div>{wind}</div>
				<div>{humidity}</div>
				<div>{pressure}</div>
			</div>
		</div>
	);
}
