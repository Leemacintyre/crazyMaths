import React from 'react';
import styles from './inputField.style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { inputValue } from '../../actions';

export const UserInputField = () => {
	const dispatch = useDispatch();

	const timeHolder = useSelector((state) => state.timeHolder);
	const stateInputValue = useSelector((state) => state.inputValue);

	return (
		<input
			className={styles}
			disabled={timeHolder === 0 ? true : false}
			value={stateInputValue}
			onChange={(event) => {
				dispatch(inputValue(event.target.value));
			}}
		/>
	);
};
