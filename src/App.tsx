import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import Game from './Components/Game';
import Result from './Components/Result';
import Weather from './Components/Weather';
import './App.css';

function App() {
	let state: any = useSelector(state => state);
	state = state.gameReducer;
	const step = state.step - 1;

	return (
		<div className="App">
			<Header />
			<Weather />
			{
				step !== state.questions_length ? <Game /> : <Result />
			}
		</div>
	);
}

export default App;
