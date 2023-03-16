import { render, screen } from '@testing-library/react';
import SparingReason from './SparingReason';
import { SparingReasonProps } from './SparingReason';

test('renders SparingReason content', () => {
	const sparingReasonProps: SparingReasonProps = {
		sparingReasonInputValue: "sparingReason",
		onChangeSparingReason: () => {},
		// sparingReasonWarningMsg: "sparingReasonWarningMsg",
		// setSparingReasonWarningMsg: () => {},
	}

	render(<SparingReason {...sparingReasonProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/Reason for sparing/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

 	//check if warning message is existed
    //  const warnMsg = screen.getByText(
	// 	/sparingReasonWarningMsg/i
	// );
	// expect(warnMsg).toBeInTheDocument();
});
