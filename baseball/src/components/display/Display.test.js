import React from 'react';

import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});

	it('displays balls', () => {
		const { getByText } = render(<Display balls="0" />);
		getByText(/balls: 0/i);
	});

	// it('displays balls', () => {
	// 	const { getByTestId, getByText } = render(<Display />);
	// 	const elem = getByTestId('balls');
	// 	getByText(/balls: 0/i);
	// });

	it('displays strikes', () => {
		const { getByText } = render(<Display strikes="0" />);
		getByText(/strikes: 0/i);
	});
});
