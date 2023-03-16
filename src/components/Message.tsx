import { useState } from 'react';

export interface MessageProps {
    message: string;
    setMessage: (message: string)=>void;
}

const Message: React.FC<MessageProps> = ({message, setMessage}) => {
    return (
        <div className = "message" >{message}</div>
    );
};

export default Message;
  