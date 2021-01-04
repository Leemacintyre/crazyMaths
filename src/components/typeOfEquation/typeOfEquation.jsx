import React, { useState } from 'react';
import styles from './typeOfEquation.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { randomNum1, isCorrect, isIncorrect, counter } from '../../actions';

export const TypeOfEquation = () => {
	const dispatch = useDispatch();

	// const addition = (event) => {
	// 	const total = num1 + num2;
	// 	const strTotal = total.toString();
	// };

	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<p>ADDITION</p>
				<p>SUBTRACTION</p>
				<p>MULTIPLICATION</p>
				<p>DIVISION</p>
			</div>
		</div>
	);
};
