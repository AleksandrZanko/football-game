export const ADD_STEP = 'ADD_STEP';
export const ADD_QUESTIONS_LENGTH = 'ADD_QUESTIONS_LENGTH';
export const ADD_TOTAL_POINTS = 'ADD_TOTAL_POINTS';
export const ADD_QUESTION_PRICE_TO_STATE = 'ADD_QUESTION_PRICE_TO_STATE';
export const ADD_POINTS = 'ADD_POINTS';
export const WEATHER_LOAD = 'WEATHER_LOAD';
export const LOADER_ON = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';

//types
interface AddQuestionsLength {
	type: typeof ADD_QUESTIONS_LENGTH,
	questions_length: number
}

interface AddTotalPoints {
	type: typeof ADD_TOTAL_POINTS,
	total_points: number
}

interface AddStep {
	type: typeof ADD_STEP
}

interface AddQuestionPriceToState {
	type: typeof ADD_QUESTION_PRICE_TO_STATE,
	question_price: number
}

interface AddPoints {
	type: typeof ADD_POINTS,
	points: number
}

interface LoaderOn {
	type: typeof LOADER_ON
}

interface LoaderOff {
	type: typeof LOADER_OFF
}

export type ActionsTypes = AddQuestionsLength | AddTotalPoints | AddStep | AddQuestionPriceToState | AddPoints | LoaderOn | LoaderOff;