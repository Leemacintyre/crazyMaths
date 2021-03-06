import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/header/header';
import { TypeOfEquation } from './components/typeOfEquation/typeOfEquation';
import { Calculation } from './components/calculations/calculation';
import { Addition } from './components/calculations/addition/addition';
import { Subtraction } from './components/calculations/subtraction/subtraction';
import { Multiplication } from './components/calculations/multiplication/multiplication';
import { Division } from './components/calculations/division/division';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
	return (
		<Router>
			<div>
				<Header path='/' component={Header} />
				<TypeOfEquation component={Header} />
				<Switch>
					<Route path='./' component={Calculation} />
					<Route path='/addition' component={Addition} />
					<Route path='/subtraction' component={Subtraction} />
					<Route path='/multiplication' component={Multiplication} />
					<Route path='/division' component={Division} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
