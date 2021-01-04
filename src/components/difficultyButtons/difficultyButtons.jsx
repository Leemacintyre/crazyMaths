import React from 'react';
import styles from './difficultyButtons.style.module.scss';
import { difficulty } from '../../actions';
import { useDispatch } from 'react-redux';

const DifficultyButtons = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.difficulty}>
			<button
				onClick={() => dispatch(difficulty(10))}
				className={styles.buttonEasy}>
				Easy
			</button>

			<button
				onClick={() => dispatch(difficulty(20))}
				className={styles.buttonMedium}>
				Medium
			</button>
			<button
				onClick={() => dispatch(difficulty(30))}
				className={styles.buttonHard}>
				Hard
			</button>
		</div>
	);
};

export default DifficultyButtons;
