export const timeHolder = (state = 0, action) => {
	switch (action.type) {
		case 'TIME_HOLDER':
			return (state = action.payload);

		default:
			return state;
	}
};
