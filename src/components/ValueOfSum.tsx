import { useState } from 'react';
import Message from './Message';

interface ValueOfSumrops {
    valueOfSum: string;
    setValueOfSum: (valueOfSum: string)=>void;
    valueOfSumWarningMsg: string;
    setValueOfSumWarningMsg: (valueOfSumWarningMsg: string)=>void;
}

const ValueOfSum: React.FC<ValueOfSumrops> = ({valueOfSum: valueOfSum, setValueOfSum: setValueOfSum, valueOfSumWarningMsg: valueOfSumWarningMsg, setValueOfSumWarningMsg: setValueOfSumWarningMsg}) => {
    return (
        <label>What is 2 + 2 ?
                <select className="dropdownlist" value={valueOfSum} onChange={(event) => { setValueOfSum(event.target.value)}}>
                <option value="not4">Not 4</option>
                <option value="equal4">4</option>
                </select>   
                <Message message={valueOfSumWarningMsg} setMessage={setValueOfSumWarningMsg} />
        </label>
    );
};

export default ValueOfSum;
  