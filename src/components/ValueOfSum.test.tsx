import { render, screen } from '@testing-library/react';
import ValueOfSum from './ValueOfSum';
import { ValueOfSumProps } from './ValueOfSum';
import user from '@testing-library/user-event';

test('renders SpeciesName content', () => {
	const valueOfSumProps: ValueOfSumProps = {
		valueOfSum: "valueOfSum",
		onChangeSumValue: () => {},
	}

	render(<ValueOfSum {...valueOfSumProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/What is 2 \+ 2 \?/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const dropdownlist = screen.getAllByRole('combobox').find((i) => i.className === 'dropdownlist');
	expect(dropdownlist).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "wrong answer" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : ValueOfSumProps = {
			valueOfSum: "4",
			onChangeSumValue: mockTrigger,	
		};
		
    	render(<ValueOfSum {...requiredProps} />);

		await user.selectOptions(screen.getByRole('combobox'), 'Not4');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/wrong answer/i
		);
		expect(message).toBeInTheDocument();
	
});

it(`Given the required props,
		When the component is rendered,
		Then no error message should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : ValueOfSumProps = {
			valueOfSum: "Not4",
			onChangeSumValue: mockTrigger,	
		};
		
    	render(<ValueOfSum {...requiredProps} />);

		await user.selectOptions(screen.getByRole('combobox'), '4');

    	expect(mockTrigger).toHaveBeenCalled();

		const error = screen.queryByText('wrong answer');
		expect(error).toBeNull();
});
