import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CityHeader from "./CityHeader";

export default function City() {
	const { cityId, city } = useParams();

	return (
		<div className="mainPage">
			<CityHeader name={city}/>
		</div>
	);
}
