import { Dispatch } from 'redux';
import { ADD_STEP, ADD_QUESTION_PRICE_TO_STATE, ADD_POINTS, ADD_QUESTIONS_LENGTH, ADD_TOTAL_POINTS, WEATHER_LOAD, LOADER_ON, LOADER_OFF } from './types';
import { ActionsTypes } from './types';

export function loadWeather() {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '529aa966c0msh1508de4ec0e863dp17c053jsne74680fd5ce5',
			'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
		}
	};

	return async (dispatch: Dispatch): Promise<any> => {
		try {
			const response = await fetch(
				'https://aerisweather1.p.rapidapi.com/observations/minsk,blr', options
			);
			const jsonData = await response.json();
			setTimeout(() => {
				dispatch({
					type: WEATHER_LOAD,
					data: jsonData.response.ob,
				});
				dispatch(loaderOff());
			}, 2000)
		} catch (err) {
			console.log('ошибка АPI');
		}
	};
}

export function addQuestionsLength(num: number): ActionsTypes {
	return {
		type: ADD_QUESTIONS_LENGTH,
		questions_length: num
	}
}

export function addTotalPoints(num: number): ActionsTypes {
	return {
		type: ADD_TOTAL_POINTS,
		total_points: num
	}
}

export function addStep(): ActionsTypes {
	return {
		type: ADD_STEP
	}
}

export function addQuestionPriceToState(num: number): ActionsTypes {
	return {
		type: ADD_QUESTION_PRICE_TO_STATE,
		question_price: num
	}
}

export function addPoints(num: number): ActionsTypes {
	return {
		type: ADD_POINTS,
		points: num
	}
}

export function loaderOn(): ActionsTypes {
	return {
		type: LOADER_ON
	}
}

export function loaderOff(): ActionsTypes {
	return {
		type: LOADER_OFF
	}
}

