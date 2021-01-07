export const showDifficultyLevel = (state = 'Easy', action) => {
	switch (action.type) {
		case 'SHOW_DIFFICULTY_LEVEL':
			return action.payload;

		default:
			return state;
	}
};
