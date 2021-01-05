import { counter } from './counter';
import { timeKeeper } from './timeKeeper';
import { randomNum1 } from './randomNum1';
import { isCorrect } from './isCorrect';
import { difficulty } from './difficulty';
import { inputValue } from './inputValue';
import { timeHolder } from './timeHolder';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	counter,
	timeKeeper,
	randomNum1,
	isCorrect,
	difficulty,
	inputValue,
	timeHolder,
});

export default rootReducers;
