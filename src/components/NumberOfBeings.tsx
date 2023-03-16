import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface NumberOfBeingsProps {
    noOfBeingsTextInputValue: string;
    onChangeNoOfBeings: (e: any) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({noOfBeingsTextInputValue, onChangeNoOfBeings}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
	    const validate = (inputValue:string) => {
            const noSpecialChars = inputValue.replace(/[^0-9 ]/g, '');
            if (parseInt(inputValue, 10) < 1000000000) return "Must be at least 1,000,000,000";
            if (inputValue !== noSpecialChars) return "Numbers Only";
        } // some validation function here

    return (
    <>
        <label htmlFor='numberOfBeings'>Number of beings:</label>
        <TextInput value={noOfBeingsTextInputValue} onChange={(e) => {
                const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
                onChangeNoOfBeings(e);
        }} />
        <Message message={errorMessage} />
    </>
)
};

export default NumberOfBeings;
  