import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import W12MFormBody from './W12MBody';
import { W12MFormBodyProps } from './W12MBody';
import { useState } from 'react';

test('renders form objects', () => {
    const submitForm: W12MFormBodyProps = {
        speciesName: "speciesName",
        planet: "planet",
        noOfBeings: "noOfBeings",
        sum: "1",
        sparingReason: "sparingReason",
    }

	render(<W12MFormBody {...submitForm}/>);
	let labelNameText = screen.getByText(
		/Species Name/i
	);
	expect(labelNameText).toBeInTheDocument();

    labelNameText = screen.getByText(
		/Planet Name/i
	);
	expect(labelNameText).toBeInTheDocument();

    labelNameText = screen.getByText(
		/Number of beings/i
	);
	expect(labelNameText).toBeInTheDocument();

    labelNameText = screen.getByText(
		/What is 2 \+ 2 \?/i
	);
	expect(labelNameText).toBeInTheDocument();

    labelNameText = screen.getByText(
		/Reason for sparing/i
	);
	expect(labelNameText).toBeInTheDocument();

    labelNameText = screen.getByText(
		/Submit Form/i
	);
	expect(labelNameText).toBeInTheDocument();

});

