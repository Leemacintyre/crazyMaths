export const isCorrect = (state = false, action) => {
	switch (action.type) {
		case 'IS_CORRECT':
			return true;
		case 'IS_INCORRECT':
			return false;
		default:
			return state;
	}
};
