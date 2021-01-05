import React from 'react';
import styles from './header.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { timeHolder } from '../../actions';

export const Header = () => {
	const counter = useSelector((state) => state.counter);

	const [timer, setTimer] = useState(0); //set timer here
	const [showStart, setShowStart] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const dispatch = useDispatch();
	dispatch(timeHolder(timer));

	const toggleDisabled = () => {
		setButtonDisabled(true);
		setTimeout(() => setButtonDisabled(false), 5000);
	};

	const time = () => {
		setTimeout(() => {
			setTimer(timer + 1);
		}, 1000);
	};

	const start = () => {
		if (timer >= 5) {
			clearTimeout(time);
		} else {
			clearTimeout(time);

			time();
		}
	};

	const display = () => {
		clearTimeout(time);
		setShowStart(!showStart);
		setTimer(0);
		clearTimeout(time);
		toggleDisabled();
	};

	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<p>CRAZY MATHS</p>
				{start()}
				<p>{!buttonDisabled ? 'start' : `TIMER : ${timer}`}</p>
				<p>SCORE : {counter} </p>
				<button disabled={buttonDisabled} onClick={display}>
					GO
				</button>
			</div>
		</div>
	);
};
