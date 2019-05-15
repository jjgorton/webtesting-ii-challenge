import React from 'react';

class Dashborad extends React.Component {
	render() {
		return (
			<div className="dash-container">
				<h2>Dashboard</h2>
				<button data-testid="balls" onClick={this.props.ballCount}>
					ball
				</button>
				<button data-testid="strikes" onClick={this.props.strikeCount}>
					strike
				</button>
				<button data-testid="foul" onClick={this.props.foulCount}>
					foul
				</button>
				<button data-testid="hit" onClick={this.props.hitCount}>
					hit
				</button>
			</div>
		);
	}
}

export default Dashborad;
