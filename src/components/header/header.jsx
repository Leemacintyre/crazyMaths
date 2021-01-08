import React from 'react';
import styles from './header.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { timeHolder, counter } from '../../actions';

export const Header = () => {
	const DisplayCounter = useSelector((state) => state.counter);

	const [timer, setTimer] = useState(0); //set timer here

	const dispatch = useDispatch();
	dispatch(timeHolder(timer));

	useEffect(() => {
		const myTimer = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
		return () => clearInterval(myTimer);
	}, [timer]);

	const start = () => {
		setTimer(60);
		dispatch(counter(0));
	};

	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<p>CRAZY MATHS</p>
				<p>{timer}</p>
				<p>SCORE : {DisplayCounter} </p>
				<button disabled={timer > 0 ? true : false} onClick={start}>
					GO
				</button>
			</div>
		</div>
	);
};
