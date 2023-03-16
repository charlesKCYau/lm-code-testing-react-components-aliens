import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';
import { NumberOfBeingsProps } from './NumberOfBeings';

test('renders NumberOfBeings content', () => {
	const numberOfBeingsProps: NumberOfBeingsProps = {
		noOfBeingsTextInputValue: "noOfBeings",
		onChangeNoOfBeings: () => {},
		// noOfBeingsWarningMsg: "noOfBeingsWarningMsg",
		// setNoOfBeingsWarningMsg: () => {},
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

	//check if warning message is existed
    // const warnMsg = screen.getByText(
	// 	/noOfBeingsWarningMsg/i
	// );
	// expect(warnMsg).toBeInTheDocument();
});
