import React from 'react';

import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

class App extends React.Component {
	state = {
		balls   : 0,
		strikes : 0
	};

	ballCount = () => {
		if (this.state.balls + 1 === 4) {
			this.setState({
				balls   : 0,
				strikes : 0
			});
		} else {
			this.setState({
				balls : this.state.balls + 1
			});
		}
	};

	strikeCount = () => {
		if (this.state.strikes + 1 === 3) {
			this.setState({
				balls   : 0,
				strikes : 0
			});
		} else {
			this.setState({
				strikes : this.state.strikes + 1
			});
		}
	};

	foulCount = () => {
		if (this.state.strikes < 2) {
			this.setState({
				strikes : this.state.strikes + 1
			});
		}
	};

	hitCount = () => {
		this.setState({
			balls   : 0,
			strikes : 0
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Baseball</h1>
				<Display balls={this.state.balls} strikes={this.state.strikes} />
				<Dashboard
					ballCount={this.ballCount}
					strikeCount={this.strikeCount}
					foulCount={this.foulCount}
					hitCount={this.hitCount}
				/>
			</div>
		);
	}
}

export default App;
