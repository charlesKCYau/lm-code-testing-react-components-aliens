import { useState } from 'react';
import Message from './Message';

export interface ValueOfSumProps {
    valueOfSum: string;
    // setValueOfSum: (valueOfSum: string)=>void;
    onChangeSumValue: (e: any) => void;
    valueOfSumWarningMsg: string;
    setValueOfSumWarningMsg: (valueOfSumWarningMsg: string)=>void;
}

const ValueOfSum: React.FC<ValueOfSumProps> = ({valueOfSum, onChangeSumValue, valueOfSumWarningMsg, setValueOfSumWarningMsg}) => (
    <>
        <label htmlFor='valueOfSum'>What is 2 + 2 ?</label>
        {/* <select className="dropdownlist" value={valueOfSum} onChange={(event) => { setValueOfSum(event.target.value)}}> */}
        <select className="dropdownlist" value={valueOfSum} onChange={onChangeSumValue}>
        <option value="Not4">Not 4</option>
        <option value="4">4</option>
        </select>   
        <Message message={valueOfSumWarningMsg} setMessage={setValueOfSumWarningMsg} />
    </>
);


export default ValueOfSum;
  