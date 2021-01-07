import { counter } from './counter';
import { randomNum1 } from './randomNum1';
import { isCorrect } from './isCorrect';
import { difficulty } from './difficulty';
import { inputValue } from './inputValue';
import { timeHolder } from './timeHolder';
import { showDifficultyLevel } from './difficultyLevel';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	counter,
	randomNum1,
	isCorrect,
	difficulty,
	inputValue,
	timeHolder,
	showDifficultyLevel,
});

export default rootReducers;
