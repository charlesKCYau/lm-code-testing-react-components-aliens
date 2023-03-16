import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import PlanetName from './PlanetName';
import { PlanetNameProps } from './PlanetName';

test('renders PlanetName content', () => {
	const planetNameProps: PlanetNameProps = {
		planetTextInputValue: "planetName",
		onChangePlanetText: () => {},
	}

	render(<PlanetName {...planetNameProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/Planet Name/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "No special characters allowed" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : PlanetNameProps = {
			planetTextInputValue: "a",
			onChangePlanetText: mockTrigger,	
		};
	
    	render(<PlanetName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '!');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/No special characters allowed/i
		);
		expect(message).toBeInTheDocument();
	
});

it(`Given the required props,
		When the component is rendered,
		Then the "too long" description should be present`, async () => {
		const mockTrigger = jest.fn();

		const requiredProps : PlanetNameProps = {
			planetTextInputValue: "1234567890123456789012345678901234567890123456789",
			onChangePlanetText: mockTrigger,	
		};
	
    	render(<PlanetName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '0');

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

		const requiredProps : PlanetNameProps = {
			planetTextInputValue: "",
			onChangePlanetText: mockTrigger,	
		};
	
    	render(<PlanetName {...requiredProps} />);

		await user.type(screen.getByRole('textbox'), '1');

    	expect(mockTrigger).toHaveBeenCalled();

		const message = screen.getByText(
			/too short/i
		);
		expect(message).toBeInTheDocument();
	
});
