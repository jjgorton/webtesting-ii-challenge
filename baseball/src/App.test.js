import React from 'react';

import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import App from './App';

describe('<App />', () => {
	it('renders without crashing', () => {
		render(<App />);
	});
});
