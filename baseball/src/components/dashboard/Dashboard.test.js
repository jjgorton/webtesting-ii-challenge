import React from 'react';

import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';
import Display from '../display/Display';
import App from '../../App';

describe('<Dashboard />', () => {
	it('renders without crashing', () => {
		render(<Dashboard />);
	});

	it('ball button increments and resets to 0', () => {
		const { getByText, getByTestId } = render(<App />);

		let button = getByTestId(/balls/i);
		fireEvent.click(button);
		fireEvent.click(button);
		getByText(/balls: 2/i);
		fireEvent.click(button);
		getByText(/balls: 3/i);
		fireEvent.click(button);
		getByText(/balls: 0/i);
	});

	it('strike button increments and resets to 0', () => {
		const { getByText, getByTestId } = render(<App />);

		let button = getByTestId(/strikes/i);

		fireEvent.click(button);
		getByText(/strikes: 1/i);
		fireEvent.click(button);
		getByText(/strikes: 2/i);
		fireEvent.click(button);
		getByText(/strikes: 0/i);
	});

	it('foul button increments strike and stops at 2', () => {
		const { getByText, getByTestId } = render(<App />);

		let button = getByTestId(/foul/i);

		fireEvent.click(button);
		getByText(/strikes: 1/i);
		fireEvent.click(button);
		getByText(/strikes: 2/i);
		fireEvent.click(button);
		getByText(/strikes: 2/i);
	});

	it('hit button resets to 0', () => {
		const { getByText, getByTestId } = render(<App />);

		let ballsButton = getByTestId(/balls/i);
		let strikeButton = getByTestId(/strikes/i);
		let button = getByTestId(/hit/i);

		fireEvent.click(ballsButton);
		fireEvent.click(strikeButton);
		getByText(/balls: 1/i);
		getByText(/strikes: 1/i);
		fireEvent.click(button);
		getByText(/balls: 0/i);
		getByText(/strikes: 0/i);
	});
});
