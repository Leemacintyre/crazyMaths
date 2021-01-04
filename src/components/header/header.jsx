import React from 'react';
import styles from './header.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const Header = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state) => state.counter);
	const [timeKeeper, setTimeKeeper] = useState(5);

	const timer = () => {
		if (timeKeeper > 0) {
			setTimeout(() => {
				setTimeKeeper(timeKeeper - 1);
			}, 1000);
		} else if (timeKeeper === 0) {
			clearTimeout();
		}
	};

	timer(); /// add a button to activate this later

	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<p>CRAZY MATHS</p>
				<p>TIMER : {timeKeeper} </p>
				<p>SCORE : {counter} </p>
			</div>
		</div>
	);
};
