import React from 'react';

function Display(props) {
	// const balls = props.balls
	return (
		<div className="display-container">
			<h2>Display</h2>
			{/* <h3>balls: {props.balls}</h3> */}
			<h3>{`balls: ${props.balls}`}</h3>
			<h3>{`strikes: ${props.strikes}`}</h3>
		</div>
	);
}

export default Display;
