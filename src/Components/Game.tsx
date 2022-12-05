import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from './Table';
import { addStep, addQuestionPriceToState, addPoints, addQuestionsLength, addTotalPoints } from './../redux/actions';
import goodSound from '../audio/good.mp3';
import wrongSound from '../audio/wrong.mp3';

interface questionTypes {
	title: string,
	src: string,
	text: string,
	variants: string[],
	price: number,
	answer: number
}

const questions: questionTypes[] = [
	{
		title: 'Начнём с главной арены Беларуси.',
		src: "../img/1.jpg",
		text: 'Когда был построен стадион "Динамо" в Минске?',
		variants: ['1922 год', '1938 год', '1934 год', '1946 год'],
		price: 100,
		answer: 2
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/1.jpg",
		text: 'Какая была первоначальная вместимость стадиона?',
		variants: ['4000', '10000', '7000', '25000'],
		price: 100,
		answer: 1
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/2.jpg",
		text: 'Во время Второй Мировой войны стадион пострадал, поэтому его практически строили заново и в 1954 году он открылся. Сколько людей вмещал стадион в 1954 году?',
		variants: ['37000', '10000', '20000', '50000'],
		price: 100,
		answer: 0
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/3.webp",
		text: 'Как называлась минская команда для которой стадион стал домашним?',
		variants: ['Зенит', 'Динамо', 'Торпедо', 'Спартак'],
		price: 100,
		answer: 3
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/4.jpg",
		text: '1980 год. К Олимпиаде реконструировали стадион. Сколько людей он стал вмещать?',
		variants: ['40000', '50000', '60000', '70000'],
		price: 100,
		answer: 1
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/5.jpeg",
		text: 'Был стадион и главной концертной площадкой. Кто установил рекорд в 1989 году, проведя 8 концертов и собрав на них 400000 зрителей?',
		variants: ['КИНО', 'Алла Пугачёва', 'София Ротару', 'Лев Лещенко'],
		price: 100,
		answer: 1
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/6.jpg",
		text: 'Что установили на стадионе во время реконструкции 1999 года?',
		variants: ['Пластиковые сидения', 'Камеры', 'Навес', 'Мачты освещения'],
		price: 100,
		answer: 0
	},
	{
		title: 'Стадион "Динамо"',
		src: "../img/7.jpg",
		text: 'Сколько после реконструкции 1999 года стал вмещать стадион?',
		variants: ['20000', '34000', '40000', '41000'],
		price: 100,
		answer: 1
	},
	{
		title: 'Легенда футбола',
		src: "../img/8.jpg",
		text: 'Что подарили Кульчему за 100 игр в сборной?',
		variants: ['Микроволновку', 'Блокнот и ручку', 'Стиральную машину', 'Кепку'],
		price: 100,
		answer: 3
	},
	{
		title: 'Раскоп',
		src: "../img/9.jpg",
		text: 'В 2012-2018 годы стадион снова реконструировали. Сколько зрителей сейчас он вмещает?',
		variants: ['20000', '40000', '22246', '31000'],
		price: 100,
		answer: 2
	}
]

function Game(): JSX.Element {
	const dispatch = useDispatch();

	const winSound = new Audio(goodSound);
	const loseAudio = new Audio(wrongSound);

	const step: number = useSelector(state => {
		const gameReducer: any = state;
		return gameReducer.gameReducer.step - 1;
	});

	const question = questions[step];

	useEffect(() => {
		dispatch(addQuestionsLength(questions.length));
		dispatch(addTotalPoints(calcTotalPoints()));
	}, [dispatch])

	useEffect(() => {
		dispatch(addQuestionPriceToState(question.price))
	}, [question, dispatch])


	const onClickVariant = (i: number, e: any) => {
		e.preventDefault();
		dispatch(addQuestionPriceToState(question.price))
		if (i === question.answer) {
			winSound.play();
			e.target.className = "btn btn-success answers-item";
			dispatch(addPoints(question.price));
			setTimeout(() => {
				e.target.className = "btn btn-primary answers-item";
			}, 3000);
		} else {
			loseAudio.play();
			const answer = document.querySelectorAll('.answers-item')[question.answer];
			e.target.className = "btn btn-danger answers-item";
			setTimeout(() => answer.className = "btn btn-success answers-item", 700);
			setTimeout(() => {
				e.target.className = "btn btn-primary answers-item";
				answer.className = "btn btn-primary answers-item";
			}, 3500);
		}

		setTimeout(() => dispatch(addStep()), 3500);
	}

	const calcTotalPoints = (): number => {
		let result = 0;
		questions.map(item => result += item.price);

		return result;
	}

	return (
		<div className="game">
			<h1 className="game-title">Белорусский футбол</h1>
			<Card className="game-card">
				<Card.Img variant="top" src={question.src} />
				<Card.Body>
					<Table />
					<Card.Title>{question.title}</Card.Title>
					<Card.Text className="question-text">
						{question.text}
					</Card.Text>
					<div className='answers-wrapper'>
						{question.variants.map((item: string, i: number) => <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickVariant(i, e)} className="answers-item" variant="primary" key={i}>{item}</Button>)}
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Game;