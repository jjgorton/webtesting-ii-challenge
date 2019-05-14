import React from 'react';

class Dashborad extends React.Component {
	render() {
		return (
			<div className="dash-container">
				<h2>Dashboard</h2>
				<button onClick={this.props.ballCount}>ball</button>
				<button onClick={this.props.strikeCount}>strike</button>
				<button onClick={this.props.foulCount}>foul</button>
				<button onClick={this.props.hitCount}>hit</button>
			</div>
		);
	}
}

export default Dashborad;
