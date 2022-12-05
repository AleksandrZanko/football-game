import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import intro from '../audio/end.mp3';

function Result(): JSX.Element {
	const introSound = new Audio(intro);
	introSound.play();

	const points: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.points;
	})

	const totalPoints: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.total_points;
	})

	const percentage: number = Math.round(points / (totalPoints / 100));

	let rank: string = '';
	let src: string = '';
	let text: string = '';

	if (percentage >= 80) {
		rank = 'Александр Кульчий';
		text = 'Настоящий мастер своего дела и знаток футбольной истории!';
		src = '../img/kulcii.jpeg';
	} else if (percentage < 80 && percentage >= 60) {
		rank = 'Ренан Брессан';
		text = 'Леганда БАТЭ';
		src = '../img/bressan.jpg';
	} else if (percentage < 60 && percentage >= 40) {
		rank = 'Роман Василюк';
		text = 'Вечно молодой игрок основы';
		src = '../img/vasiluk.jpg';
	} else if (percentage < 40 && percentage >= 0) {
		rank = 'Пунтус';
		text = 'Мастер!';
		src = '../img/puntus.jpg';
	}

	return (
		<div className="result">
			<Card className="result-card">
				<Card.Img variant="top" src={src} />
				<Card.Body>
					<Card.Title>Игра закончена! <br /> Поздравляем, ты {rank}!</Card.Title>
					<Card.Text className="result-text">
						<b>Результат</b>: {points} баллов<br />
						{text}
					</Card.Text>
					<div className="success-wrapper">
						<div className="success">
							<div className="success-rate" style={{ height: `${percentage}%` }}></div>
						</div>
						<div className="success-text">Правильных ответов {percentage} %</div>
					</div>
					<div className='result-buttons-wrapper'>
						<Button variant="primary" onClick={(e: React.MouseEvent<HTMLButtonElement>) => document.location.reload()}>Повторить викторину!</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Result;