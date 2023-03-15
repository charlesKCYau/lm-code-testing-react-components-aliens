import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface NumberOfBeingsProps {
    noOfBeingsTextInputValue: string;
    onChangeNoOfBeings: (e: any) => void;
    noOfBeingsWarningMsg: string;
    setNoOfBeingsWarningMsg: (noOfBeingsWarningMsg: string)=>void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({noOfBeingsTextInputValue, onChangeNoOfBeings, noOfBeingsWarningMsg, setNoOfBeingsWarningMsg}) => (
    <>
        <label htmlFor='numberOfBeings'>Number of beings:</label>
        <TextInput value={noOfBeingsTextInputValue} onChange={onChangeNoOfBeings} />
        <Message message={noOfBeingsWarningMsg} setMessage={setNoOfBeingsWarningMsg} />
    </>
);

export default NumberOfBeings;
  