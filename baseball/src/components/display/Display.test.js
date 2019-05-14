import React from 'react';

import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});

	it('displays balls', () => {
		const { getByText } = render(<Display />);
		getByText(/balls:/i);
	});

	it('displays strikes', () => {
		const { getByText } = render(<Display />);
		getByText(/strikes:/i);
	});
});
