import { useState } from 'react';

interface MessageProps {
    message: string;
    setMessage: (message: string)=>void;
}

const Message: React.FC<MessageProps> = ({message: message, setMessage: setMessage}) => {
    return (
        <div className = "message" >{message}</div>
    );
};

export default Message;
  