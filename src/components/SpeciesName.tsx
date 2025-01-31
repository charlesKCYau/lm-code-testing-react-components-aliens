import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface SpeciesNameProps {
    speciesNameTextInputValue: string;
    onChangeSpeciesName: (e: any) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesNameTextInputValue, onChangeSpeciesName}) => {
    
    const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
	const validate = (inputValue:string) => {
        const noSpecialChars = inputValue.replace(/[^a-zA-Z ]/g, '');
        if (inputValue.length < 3) return "Too short, Species Name should be between 3 and 23";
        if (inputValue.length > 23) return "Too long, Species Name should be between 3 and 23";
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
  