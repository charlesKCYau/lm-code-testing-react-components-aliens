import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface SpeciesNameProps {
    speciesNameTextInputValue: string;
    onChangeSpeciesName: (e: any) => void;
    // speciesNameWarningMsg: string;
    // setSpeciesNameWarningMsg: (speciesNameWarningMsg: string)=>void;
}

// const SpeciesName: React.FC<SpeciesNameProps> = ({speciesNameTextInputValue, onChangeSpeciesName, speciesNameWarningMsg, setSpeciesNameWarningMsg}) => {
const SpeciesName: React.FC<SpeciesNameProps> = ({speciesNameTextInputValue, onChangeSpeciesName}) => {
    
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
	const validate = (inputValue:string) => {
        const noSpecialChars = inputValue.replace(/[^a-zA-Z ]/g, '');
        if (inputValue.length < 3) return "too short";
        if (inputValue.length > 23) return "too long";
        if (inputValue !== noSpecialChars) return "No numbers or special characters allowed";

    } // some validation function here

    return(
        <>
            <label htmlFor='speciesName'>Species Name:</label>
            <TextInput value={speciesNameTextInputValue} onChange={(e) => {
                const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
                onChangeSpeciesName(e);
            }} />
            {/* <Message message={speciesNameWarningMsg} setMessage={setSpeciesNameWarningMsg} /> */}
            <Message message={errorMessage} />
        </>
    )
};

export default SpeciesName;
  