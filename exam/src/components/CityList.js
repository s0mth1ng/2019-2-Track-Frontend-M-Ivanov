import React, {useState} from 'react';
import CityListHeader from "./CityListHeader";
import citiesStyles from '../styles/cityListStyles.module.css';
import SingleCity from "./SingleCity";

export default function CityList() {
	const [cities, setCities] = useState([<SingleCity id={2643743} city={'London'} country={'UK'}/>,
	<SingleCity id={524901} city={'Moscow'} country={'Russia'}/>,
	<SingleCity id={491687} city={'Smolensk'} country={'Russia'}/>]);

	return (
		<div className="mainPage">
			<CityListHeader/>
			<div className={citiesStyles.container}>
				<div className={citiesStyles.citiesContainer}>{cities}</div>
			</div>
		</div>
	);
}
