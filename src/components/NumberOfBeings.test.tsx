import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import NumberOfBeings from './NumberOfBeings';
import { NumberOfBeingsProps } from './NumberOfBeings';

test('renders NumberOfBeings content', () => {
	const numberOfBeingsProps: NumberOfBeingsProps = {
		noOfBeingsTextInputValue: "noOfBeings",
		onChangeNoOfBeings: () => {},
	}

	render(<NumberOfBeings {...numberOfBeingsProps}/>);
	
	//check if label is existed
	const labelNameText = screen.getByText(
		/Number of beings/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "Numbers Only" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : NumberOfBeingsProps = {
			noOfBeingsTextInputValue: 'abc',
			onChangeNoOfBeings: mockTrigger,	
		};

    	render(<NumberOfBeings {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), 'dummy');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/Numbers Only/i
		);
		expect(message).toBeInTheDocument();
	
});

it(`Given the required props,
		When the component is rendered,
		Then the "at least 1,000,000,000" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : NumberOfBeingsProps = {
			noOfBeingsTextInputValue: '123',
			onChangeNoOfBeings: mockTrigger,	
		};

    	render(<NumberOfBeings {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), 'dummy');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/Must be at least 1,000,000,000/i
		);
		expect(message).toBeInTheDocument();
	
});
