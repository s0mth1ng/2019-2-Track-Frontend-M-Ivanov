import React, { useState } from 'react';
import CityListHeader from './CityListHeader';
import citiesStyles from '../styles/cityListStyles.module.css';
import SingleCity from './SingleCity';
import addButton from '../assets/add.svg';
import { Link } from 'react-router-dom';

export default function CityList() {
	const citiesIds = JSON.parse(localStorage.getItem('cities')) || [];
	const newCities = [];

	for (let i = 0; i < citiesIds.length; i += 1) {
		newCities.push(<SingleCity key={citiesIds[i]} id={citiesIds[i]} />);
	}

	const [cities] = useState(newCities);

	return (
		<div className="mainPage">
			<CityListHeader />
			<div className={citiesStyles.container}>
				<div className={citiesStyles.citiesContainer}>{cities}</div>
			</div>
			<Link to="/add" className={`add-button ${citiesStyles.create}`}>
				<img src={addButton} alt="Add city" />
			</Link>
		</div>
	);
}
