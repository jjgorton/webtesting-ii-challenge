import React from 'react';

import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		render(<Display />);
	});
});
