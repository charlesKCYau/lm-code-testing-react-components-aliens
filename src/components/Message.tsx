import { useState } from 'react';

export interface MessageProps {
    message: string | undefined;
    // setMessage?: (message: string)=>void;
}

// const Message: React.FC<MessageProps> = ({message, setMessage}) => {
const Message: React.FC<MessageProps> = ({message}) => {
        if (message === undefined) return <></>;
    return (
        <div className = "message" >{message}</div>
    );
};

export default Message;
  