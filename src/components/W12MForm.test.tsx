import { render, screen } from '@testing-library/react';
// import { it } from 'node:test';
import W12MForm from './W12MForm';
import user from '@testing-library/user-event';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');

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

it(`When clicking the submit button, the button text change to newText`, async () => {
		// const mockClick = jest.fn();
	
    	render(<W12MForm />);

		const submitButton = screen.getAllByRole('button').find((b) => b.textContent === 'Submit Form');

		expect(submitButton).toBeInTheDocument();
		
		if (submitButton) {
			await user.click(submitButton);
			
			const newTextButton = screen.getAllByRole('button').find((b) => b.textContent === 'newText');
			expect(newTextButton).toBeInTheDocument();
		}
	});
