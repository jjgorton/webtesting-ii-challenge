import React from 'react';

import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>Baseball</h1>
				<Display />
				<Dashboard />
			</div>
		);
	}
}

export default App;
