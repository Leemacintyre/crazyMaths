const initialState = {
	num1: 10,
	num2: 10,
};

export const randomNum1 = (state = initialState, action) => {
	switch (action.type) {
		case 'RANDOM_NUM':
			return {
				num1: action.payload1,
				num2: action.payload2,
			};

		default:
			return state;
	}
};
