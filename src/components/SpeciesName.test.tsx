import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import { SpeciesNameProps } from './SpeciesName';
import user from '@testing-library/user-event';

test('renders SpeciesName content', () => {
	const speciesNameProps: SpeciesNameProps = {
		speciesNameTextInputValue: "speciesName",
		onChangeSpeciesName: () => {},
	}

	render(<SpeciesName {...speciesNameProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/Species Name/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "No numbers or special characters allowed" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : SpeciesNameProps = {
			speciesNameTextInputValue: "ab",
			onChangeSpeciesName: mockTrigger,	
		};
	
    	render(<SpeciesName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '!');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/No numbers or special characters allowed/i
		);
		expect(message).toBeInTheDocument();
	
});

it(`Given the required props,
		When the component is rendered,
		Then the "too long" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : SpeciesNameProps = {
			speciesNameTextInputValue: "123456789012345678901234567890123",
			onChangeSpeciesName: mockTrigger,	
		};

    	render(<SpeciesName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '4');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/too long/i
		);
		expect(message).toBeInTheDocument();
	
});

it(`Given the required props,
		When the component is rendered,
		Then the "too short" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : SpeciesNameProps = {
			speciesNameTextInputValue: "1",
			onChangeSpeciesName: mockTrigger,	
		};
	
    	render(<SpeciesName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '2');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/too short/i
		);
		expect(message).toBeInTheDocument();
	
});
