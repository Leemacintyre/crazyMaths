import React from 'react';
import styles from './difficultyButtons.style.module.scss';
import { difficulty, showDifficultyLevel } from '../../actions';
import { useDispatch } from 'react-redux';

const DifficultyButtons = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.difficulty}>
			<button
				type='button'
				onClick={() => {
					dispatch(difficulty(10));
					dispatch(showDifficultyLevel('Easy'));
				}}
				className={styles.buttonEasy}>
				Easy
			</button>

			<button
				onClick={() => {
					dispatch(difficulty(20));
					dispatch(showDifficultyLevel('Medium'));
				}}
				className={styles.buttonMedium}>
				Medium
			</button>
			<button
				onClick={() => {
					dispatch(difficulty(30));
					dispatch(showDifficultyLevel('Hard'));
				}}
				className={styles.buttonHard}>
				Hard
			</button>
		</div>
	);
};

export default DifficultyButtons;
