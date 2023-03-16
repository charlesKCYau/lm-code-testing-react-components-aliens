import { useState } from 'react';
import Message from './Message';

export interface SparingReasonProps {
    sparingReasonInputValue: string;
    onChangeSparingReason: (e: any) => void;
    sparingReasonWarningMsg: string;
    setSparingReasonWarningMsg: (sparingReasonWarningMsg: string)=>void;
}

const SparingReason: React.FC<SparingReasonProps> = ({sparingReasonInputValue, onChangeSparingReason, sparingReasonWarningMsg, setSparingReasonWarningMsg}) => (
    <>
        <label htmlFor='sparingReason'>Reason for sparing:</label>
        {/* <textarea className = "input" cols={30} rows={4} value={sparingReasonInputValue} onChange={(event) => { setSparingReasonInputValue(event.target.value)}}></textarea> */}
        <textarea className = "input" cols={30} rows={4} value={sparingReasonInputValue} onChange={onChangeSparingReason}></textarea>
        <Message message={sparingReasonWarningMsg} setMessage={setSparingReasonWarningMsg} />
    </>
);

export default SparingReason;
  