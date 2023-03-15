import { useState } from 'react';
import Message from './Message';

interface SparingReasonProps {
    sparingReasonInputValue: string;
    setSparingReasonInputValue: (sparingReasonInputValue: string)=>void;
    sparingReasonWarningMsg: string;
    setSparingReasonWarningMsg: (sparingReasonWarningMsg: string)=>void;
}

const SparingReason: React.FC<SparingReasonProps> = ({sparingReasonInputValue: sparingReasonInputValue, setSparingReasonInputValue: setSparingReasonInputValue, sparingReasonWarningMsg: sparingReasonWarningMsg, setSparingReasonWarningMsg: setSparingReasonWarningMsg}) => {
    return (
        <label>Reason for sparing:
            <textarea className = "input" cols={30} rows={4} value={sparingReasonInputValue} onChange={(event) => { setSparingReasonInputValue(event.target.value)}}></textarea>
            <Message message={sparingReasonWarningMsg} setMessage={setSparingReasonWarningMsg} />
        </label>
    );
};

export default SparingReason;
  