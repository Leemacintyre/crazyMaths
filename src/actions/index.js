export const counter = (x) => {
	return {
		type: 'INCREMENT',
		payload: x,
	};
};
///////////////////////////////////////
export const inputValue = (value) => {
	return {
		type: 'INPUT_VALUE',
		payload: value,
	};
};

///////////////////////////////////////

export const randomNum1 = (x) => {
	return {
		type: 'RANDOM_NUM',
		payload1: rndNum1(x),
		payload2: rndNum1(x),
	};
};

function rndNum1(x) {
	return Math.floor(Math.random() * x) + 1;
}

///////////////////////////////////////

export const isCorrect = () => {
	return {
		type: 'IS_CORRECT',
	};
};

export const isIncorrect = () => {
	return {
		type: 'IS_INCORRECT',
	};
};

///////////////////////////////////////

export const difficulty = (difficulty) => {
	return {
		type: 'DIFFICULTY',
		payload: difficulty,
	};
};

///////////////////////////////////////

export const showDifficultyLevel = (difficultyLevel) => {
	return {
		type: 'SHOW_DIFFICULTY_LEVEL',
		payload: difficultyLevel,
	};
};

///////////////////////////////////////

export const timeHolder = (time) => {
	return {
		type: 'TIME_HOLDER',
		payload: time,
	};
};
