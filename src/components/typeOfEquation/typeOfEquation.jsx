import React from 'react';
import styles from './typeOfEquation.style.module.scss';
import { Link } from 'react-router-dom';
export const TypeOfEquation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titles}>
				<Link to='/addition'>ADDITION</Link>
				<Link to='/subtraction'>SUBTRACTION</Link>
				<Link to='/multiplication'>MULTIPLICATION</Link>
				<Link to='/division'>DIVISION</Link>
			</div>
		</div>
	);
};
