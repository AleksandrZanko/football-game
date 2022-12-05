import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Table(): JSX.Element {
	const step: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.step;
	})

	const points: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.points;
	})

	const price: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.question_price;
	})

	const length: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.questions_length;
	})

	let progress: number = Math.round((step - 1) / length * 100);

	return (
		<div className="table">
			<ProgressBar variant="warning" animated now={progress} className="progress" />
			<div className='wrapper-table-data'>
				<div>Набранные очки: {points}</div>
				<div>Цена вопроса: {price}</div>
			</div>
		</div>
	);
}

export default Table;