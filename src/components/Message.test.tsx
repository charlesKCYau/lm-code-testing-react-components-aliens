import { render, screen } from '@testing-library/react';
import Message from './Message';
import { MessageProps } from './Message';

test('renders message content', () => {
    const messageProps: MessageProps = {
		message: "message",
		// setMessage: () => {},
	}

	render(<Message {...messageProps} />);
	const messageContent = screen.getByText(
		/message/i
	);
	expect(messageContent).toBeInTheDocument();
});
