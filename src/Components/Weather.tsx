import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../index';
import { loadWeather } from '../redux/actions';
import Spinner from './Spinner';

function Weather(): JSX.Element {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(loadWeather());
	}, [dispatch])

	const temperature: number = useSelector(state => {
		const weatherReducer: any = state;
		return weatherReducer.weatherReducer.temperature;
	})

	const time = useSelector(state => {
		const weatherReducer: any = state;
		const result: Array<String> = weatherReducer.weatherReducer.time.slice(11, 16)
		return result;
	})

	const spinner: boolean = useSelector(state => {
		const weatherReducer: any = state;
		return weatherReducer.weatherReducer.loading;
	})

	return (
		<div className="weather-wrapper">
			{
				spinner
					? <Spinner />
					: <>
						<h2 className="weather-title">Погода в Минске <br />в {time}</h2>
						<p className="weather-text">{temperature} &#176;C</p>
						</>
			}
		</div>
	)
}

export default Weather;