export const timeKeeper = (state = 60, action) => {
	switch (action.type) {
		case 'TIME_KEEPER':
			return state - action.payload;

		default:
			return state;
	}
};
