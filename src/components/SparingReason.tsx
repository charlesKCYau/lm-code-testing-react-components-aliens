import { useState } from 'react';
import Message from './Message';

export interface SparingReasonProps {
    sparingReasonInputValue: string;
    onChangeSparingReason: (e: any) => void;
    // sparingReasonWarningMsg: string;
    // setSparingReasonWarningMsg: (sparingReasonWarningMsg: string)=>void;
}

// const SparingReason: React.FC<SparingReasonProps> = ({sparingReasonInputValue, onChangeSparingReason, sparingReasonWarningMsg, setSparingReasonWarningMsg}) => {
const SparingReason: React.FC<SparingReasonProps> = ({sparingReasonInputValue, onChangeSparingReason}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
	const validate = (inputValue:string) => {
        if (inputValue.length < 17) return "too short";
        if (inputValue.length > 153) return "too long";

    } // some validation function here

    return(
        <>
            <label htmlFor='sparingReason'>Reason for sparing:</label>
            <textarea className = "input" cols={30} rows={4} value={sparingReasonInputValue} onChange={(e) => {
                const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
                onChangeSparingReason(e);
            }}></textarea>
            {/* <Message message={sparingReasonWarningMsg} setMessage={setSparingReasonWarningMsg} /> */}
            <Message message={errorMessage} />
        </>
    )
}
;

export default SparingReason;
  