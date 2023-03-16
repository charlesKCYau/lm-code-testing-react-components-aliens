import { render, screen } from '@testing-library/react';
import ValueOfSum from './ValueOfSum';
import { ValueOfSumProps } from './ValueOfSum';

test('renders SpeciesName content', () => {
	const valueOfSumProps: ValueOfSumProps = {
		valueOfSum: "valueOfSum",
		onChangeSumValue: () => {},
		valueOfSumWarningMsg: "valueOfSumWarningMsg",
		setValueOfSumWarningMsg: () => {},
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

 	//check if warning message is existed
     const warnMsg = screen.getByText(
		/valueOfSumWarningMsg/i
	);
	expect(warnMsg).toBeInTheDocument();
});
