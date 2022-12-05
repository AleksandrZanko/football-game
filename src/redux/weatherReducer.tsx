import { WEATHER_LOAD, LOADER_ON, LOADER_OFF } from "./types";

const initialState = {
	temperature: 'ждём данные',
	time: 'ждём данные',
	loading: true
}

export const weatherReducer = (state = initialState, action: any) => {

	switch (action.type) {
		case WEATHER_LOAD:
			return {
				...state,
				temperature: action.data.tempC,
				time: action.data.recDateTimeISO
			}

		case LOADER_ON:
			return {
				...state,
				loading: true
			}

		case LOADER_OFF:
			return {
				...state,
				loading: false
			}

		default:
			return state;
	}
}