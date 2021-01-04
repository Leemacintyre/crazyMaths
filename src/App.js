import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/header/header';
import { TypeOfEquation } from './components/typeOfEquation/typeOfEquation';
import { Calculation } from './components/calculations/calculation';
import { Subtraction } from './components/calculations/subtraction/subtraction';
import { Multiplication } from './components/calculations/multiplication/multiplication';
import { Division } from './components/calculations/division/division';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
	// const dispatch = useDispatch();

	// const count = useSelector((state) => state.counter);

	return (
		<Router>
			<div>
				<Header path='/' component={Header} />
				<TypeOfEquation component={Header} />
				<Switch>
					<Route exact path='/addition' component={Calculation} />
					<Route path='/subtraction' component={Subtraction} />
					<Route path='/multiplication' component={Multiplication} />
					<Route path='/division' component={Division} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
