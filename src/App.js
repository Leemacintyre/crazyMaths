import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/header/header';
import { TypeOfEquation } from './components/typeOfEquation/typeOfEquation';
import { Calculation } from './components/calculations/calculation';

import './App.css';

const App = () => {
	// const dispatch = useDispatch();

	// const count = useSelector((state) => state.counter);

	return (
		<div>
			<Header />
			<TypeOfEquation />
			<Calculation />
		</div>
	);
};

export default App;
