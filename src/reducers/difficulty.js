export const difficulty = (state = 10, action) => {
	switch (action.type) {
		case 'DIFFICULTY':
			return action.payload;

		default:
			return state;
	}
};
