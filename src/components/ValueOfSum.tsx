import { useState } from 'react';
import Message from './Message';

export interface ValueOfSumProps {
    valueOfSum: string;
    onChangeSumValue: (e: any) => void;
}

const ValueOfSum: React.FC<ValueOfSumProps> = ({valueOfSum, onChangeSumValue}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
        const validate = (inputValue:string) => {
            if (inputValue !== '4') return "wrong answer";

        } // some validation function here

    return(
    <>
        <label htmlFor='valueOfSum'>What is 2 + 2 ?</label>
        <select className="dropdownlist" value={valueOfSum} onChange={(e) => {
                const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
                onChangeSumValue(e);
            }}>
            <option value="Not4">Not 4</option>
            <option value="4">4</option>
        </select>   
        <Message message={errorMessage} />
    </>
)}
;


export default ValueOfSum;
  