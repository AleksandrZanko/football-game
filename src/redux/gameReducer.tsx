import { ADD_STEP, ADD_QUESTION_PRICE_TO_STATE, ADD_POINTS, ADD_QUESTIONS_LENGTH, ADD_TOTAL_POINTS } from "./types";

interface initialStateTypes {
	questions_length: number,
	step: number,
	points: number,
	question_price: number,
	total_points: number
}

const initialState: initialStateTypes = {
	questions_length: 10,
	step: 1,
	points: 0,
	question_price: 0,
	total_points: 0
}

export const gameReducer = (state = initialState, action: any): any => {

	switch (action.type) {
		case ADD_QUESTIONS_LENGTH:
			return {
				...state,
				questions_length: +action.questions_length
			};

		case ADD_TOTAL_POINTS:
			return {
				...state,
				total_points: action.total_points
			};

		case ADD_STEP:
			return {
				...state,
				step: state.step + 1
			};

		case ADD_QUESTION_PRICE_TO_STATE:
			return {
				...state,
				question_price: action.question_price
			};

		case ADD_POINTS:
			return {
				...state,
				points: action.points + state.points
			};

		default:
			return state;
	}
}