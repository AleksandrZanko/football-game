import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
	gameReducer,
	weatherReducer
})

export type RootState = ReturnType<typeof rootReducer>;