import React, { useState } from 'react';
import styles from './calculation.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { randomNum1, isCorrect, isIncorrect, counter } from '../../actions';
import DifficultyButtons from '../difficultyButtons/difficultyButtons';

export const Calculation = () => {
	const dispatch = useDispatch();
	const num1 = useSelector((state) => state.randomNum1.num1);
	const num2 = useSelector((state) => state.randomNum1.num2);
	const difficultyLevel = useSelector((state) => state.difficulty);
	const answerState = useSelector((state) => state.isCorrect);

	const [inputValue, setInputValue] = useState('');
	//const [subtraction, setSubtraction] = useState('-');
	//const noSubtraction = setSubtraction(parseInt(subtraction));
	//console.log(subtraction);

	const checkAnswer = (event) => {
		const total = num1 + num2;
		const strTotal = total.toString();
		setInputValue(event.target.value);
		console.log(answerState);
		console.log(event.target.value);

		if (event.target.value === strTotal) {
			setInputValue('');
			dispatch(randomNum1(difficultyLevel));
			dispatch(isCorrect());
			dispatch(counter());
		} else if (event.target.value.length > 0) {
			dispatch(isIncorrect());
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.equation}>
				<p onClick={() => dispatch(randomNum1(50))}>{num1}</p>
				<p>+</p>
				<p>{num2}</p>
			</div>
			{/* <button>sub</button> */}
			<DifficultyButtons />

			<div className={styles.inputContainer}>
				<p>{answerState ? 'Correct' : 'Incorrect'}</p>
				<input value={inputValue} onChange={checkAnswer} />
			</div>
		</div>
	);
};
