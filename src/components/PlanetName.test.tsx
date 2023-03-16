import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';
import { PlanetNameProps } from './PlanetName';

test('renders PlanetName content', () => {
	const planetNameProps: PlanetNameProps = {
		planetTextInputValue: "planetName",
		onChangePlanetText: () => {},
		// planetWarningMsg: "planetWarningMsg",
		// setPlanetWarningMsg: () => {},
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

 	//check if warning message is existed
    //  const warnMsg = screen.getByText(
	// 	/planetWarningMsg/i
	// );
	// expect(warnMsg).toBeInTheDocument();
});
