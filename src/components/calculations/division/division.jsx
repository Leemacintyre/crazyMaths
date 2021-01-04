import React, { useEffect } from 'react';
import styles from './division.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
	randomNum1,
	isCorrect,
	isIncorrect,
	counter,
	inputValue,
} from '../../../actions';
import DifficultyButtons from '../../difficultyButtons/difficultyButtons';

export const Division = () => {
	const dispatch = useDispatch();
	const num1 = useSelector((state) => state.randomNum1.num1);
	const num2 = useSelector((state) => state.randomNum1.num2);
	const difficultyLevel = useSelector((state) => state.difficulty);
	const answerState = useSelector((state) => state.isCorrect);

	const stateInputValue = useSelector((state) => state.inputValue);
	const fraction = num1 * num2;
	const checkAnswer = () => {
		const total = fraction / num2;
		const strTotal = total.toString();

		if (stateInputValue === strTotal) {
			dispatch(randomNum1(difficultyLevel));
			dispatch(isCorrect());
			dispatch(counter());
			dispatch(inputValue(''));
		} else if (stateInputValue.length > 0) {
			dispatch(isIncorrect());
		}
	};

	useEffect(() => {
		checkAnswer();
	});

	return (
		<div className={styles.container}>
			<div className={styles.equation}>
				<p onClick={() => dispatch(randomNum1(difficultyLevel))}>{fraction}</p>
				<p> / </p>
				<p>{num2}</p>
			</div>
			<DifficultyButtons />
			<div className={styles.inputContainer}>
				<p>{answerState ? 'Correct' : 'Incorrect'}</p>
				<input
					value={stateInputValue}
					onChange={(event) => {
						checkAnswer();
						dispatch(inputValue(event.target.value));
					}}
				/>
			</div>
		</div>
	);
};
