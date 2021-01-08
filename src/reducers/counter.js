export const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			if (action.payload === 0) {
				return (state = 0);
			}
			return state + action.payload;

		default:
			return state;
	}
};
