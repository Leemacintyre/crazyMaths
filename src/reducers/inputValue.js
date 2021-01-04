export const inputValue = (state = '', action) => {
	switch (action.type) {
		case 'INPUT_VALUE':
			return action.payload;

		default:
			return state;
	}
};
