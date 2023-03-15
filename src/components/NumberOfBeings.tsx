import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

interface NumberOfBeingsProps {
    noOfBeingsTextInputValue: string;
    setNoOfBeingsTextInputValue: (noOfBeingsTextInputValue: string)=>void;
    noOfBeingsWarningMsg: string;
    setNoOfBeingsWarningMsg: (noOfBeingsWarningMsg: string)=>void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({noOfBeingsTextInputValue: noOfBeingsTextInputValue, setNoOfBeingsTextInputValue: setNoOfBeingsTextInputValue, noOfBeingsWarningMsg: noOfBeingsWarningMsg, setNoOfBeingsWarningMsg: setNoOfBeingsWarningMsg}) => {
    return (
        <label>Number of beings:
            <TextInput value={noOfBeingsTextInputValue} setValue={setNoOfBeingsTextInputValue} />
            <Message message={noOfBeingsWarningMsg} setMessage={setNoOfBeingsWarningMsg} />
        </label>
    );
};

export default NumberOfBeings;
  