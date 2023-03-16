import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import { SpeciesNameProps } from './SpeciesName';

test('renders SpeciesName content', () => {
	const speciesNameProps: SpeciesNameProps = {
		speciesNameTextInputValue: "speciesName",
		onChangeSpeciesName: () => {},
		speciesNameWarningMsg: "speciesNameWarningMsg",
		setSpeciesNameWarningMsg: () => {},
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

 	//check if warning message is existed
     const warnMsg = screen.getByText(
		/speciesNameWarningMsg/i
	);
	expect(warnMsg).toBeInTheDocument();
});
