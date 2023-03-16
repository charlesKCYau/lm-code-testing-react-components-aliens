import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';
import { TextInputProps } from './TextInput';

test('renders message content', () => {
    const textInputProps: TextInputProps = {
		value: "value",
		onChange: () => {},
	}

	render(<TextInput {...textInputProps} />);

    //check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();
});
