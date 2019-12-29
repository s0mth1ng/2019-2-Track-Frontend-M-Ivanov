import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerStyles from '../styles/headerStyles.module.css';
import backButton from '../assets/back.svg';
import { TextField, Button } from '@material-ui/core';
import addCityStyles from '../styles/addCityStyles.module.css';
import optionsButton from '../assets/options.svg';
import {key} from '../openweather/api';

export default function AddCity() {
	const [cityName, setCityName] = useState('');
	const [long, setLong] = useState('');
	const [lat, setLat] = useState('');
	const [cityId, setCityId] = useState('');
	const cities = JSON.parse(localStorage.getItem('cities')) || [];

	function saveViaName(e) {
		e.preventDefault();
		if (cityName === '') {
			return;
		}

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
		fetch(url)
			.then(function (resp) {
				return resp.json();
			})
			.then(function (data) {
				if (data.id == null) {
					throw new Error("invalid data");
				}
				if (cities.includes(data.id)) {
					alert('You have already added this city');
					throw new Error("already added");
				}
				cities.push(data.id);
				localStorage.setItem('cities', JSON.stringify(cities));
				alert('Succes!');
			})
			.catch((e) => {
				console.log(e);
				alert(e.message);
			});
	}

	function saveViaPosition(e) {
		e.preventDefault();
		if (long === '' || lat === '') {
			return;
		}

		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
		fetch(url)
			.then(function (resp) {
				return resp.json();
			})
			.then(function (data) {
				if (data.id == null) {
					throw new Error("invalid data");
				}
				if (cities.includes(data.id)) {
					alert('You have already added this city');
					throw new Error("already added");
				}
				cities.push(data.id);
				localStorage.setItem('cities', JSON.stringify(cities));
				alert('Succes!');
			})
			.catch((e) => {
				console.log(e);
				alert(e);
			});
	}

	function saveViaId(e) {
		e.preventDefault();
		if (cityId === '') {
			return;
		}

		const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`;
		fetch(url)
			.then(function (resp) {
				return resp.json();
			})
			.then(function (data) {
				if (data.id == null) {
					throw new Error("invalid data");
				}
				if (cities.includes(data.id)) {
					alert('You have already added this city');
					throw new Error("already added");
				}
				cities.push(data.id);
				localStorage.setItem('cities', JSON.stringify(cities));
				alert('Succes!');
			})
			.catch((e) => {
				console.log(e);
				alert(e);
			});
	}

	return (
		<div className="mainPage">
			<div className={headerStyles.container}>
				<Link to="/" className={`back-button ${headerStyles.button}`}>
					<img src={backButton} alt="Back button" />
				</Link>
				<div className={headerStyles.info}>
					<div className={headerStyles.name}>Add city</div>
				</div>
				<div className={`save-button ${headerStyles.button}`}>
					<img src={optionsButton} alt="Done button" />
				</div>
			</div>
			<div className={addCityStyles.container}>
				<form className={addCityStyles.form} onSubmit={saveViaName}>
					<div className={addCityStyles.title}>Via city's name</div>
					<div className={addCityStyles.input}>
						<TextField
							value={cityName}
							onChange={(e) => setCityName(e.target.value)}
							label="City"
							variant="outlined"
						/>
					</div>
					<Button
						color="primary"
						onClick={saveViaName}
						variant="contained"
						size="large"
					>
						Add
				</Button>
				</form>
				<form className={addCityStyles.form} onSubmit={saveViaPosition}>
					<div className={addCityStyles.title}>Via longitude and latitude</div>
					<div className={addCityStyles.input}>
						<TextField
							value={long}
							onChange={(e) => setLong(e.target.value)}
							label="Longitude"
							variant="outlined"
						/>
					</div>
					<div className={addCityStyles.input}>
						<TextField
							value={lat}
							onChange={(e) => setLat(e.target.value)}
							label="Latitude"
							variant="outlined"
						/>
					</div>
					<Button
						color="primary"
						onClick={saveViaPosition}
						variant="contained"
						size="large"
					>
						Add
				</Button>
				</form>
				<form className={addCityStyles.form} onSubmit={saveViaId}>
					<div className={addCityStyles.title}>Via city's id</div>
					<div className={addCityStyles.input}>
						<TextField
							value={cityId}
							onChange={(e) => setCityId(e.target.value)}
							label="Id"
							variant="outlined"
						/>
					</div>
					<Button
						color="primary"
						onClick={saveViaId}
						variant="contained"
						size="large"
					>
						Add
				</Button>
				</form>
			</div>
		</div>
	);
}
