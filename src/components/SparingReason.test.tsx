import { render, screen } from '@testing-library/react';
import SparingReason from './SparingReason';
import { SparingReasonProps } from './SparingReason';
import user from '@testing-library/user-event';

test('renders SparingReason content', () => {
	const sparingReasonProps: SparingReasonProps = {
		sparingReasonInputValue: "sparingReason",
		onChangeSparingReason: () => {},
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

});

it(`Given the required props,
When the component is rendered,
Then the "too long" description should be present`, async () => {
const mockTrigger = jest.fn();

const requiredProps : SparingReasonProps = {
	sparingReasonInputValue: 
	"123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123",
	onChangeSparingReason: mockTrigger,	
};

render(<SparingReason {...requiredProps} />);

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

const requiredProps : SparingReasonProps = {
	sparingReasonInputValue: "",
	onChangeSparingReason: mockTrigger,	
};

render(<SparingReason {...requiredProps} />);

await user.type(screen.getByRole('textbox'), '1');

expect(mockTrigger).toHaveBeenCalled();

const message = screen.getByText(
	/too short/i
);
expect(message).toBeInTheDocument();

});
