import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface PlanetNameProps {
    planetTextInputValue: string;
    onChangePlanetText: (e: any) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({planetTextInputValue, onChangePlanetText}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
        const validate = (inputValue:string) => {
            const noSpecialChars = inputValue.replace(/[^a-zA-Z0-9 ]/g, '');
            if (inputValue.length < 2) return "Too short, Planet Name should be between 2 and 49";
            if (inputValue.length > 49) return "Too long, Planet Name should be between 2 and 49";
            if (inputValue !== noSpecialChars) return "No special characters allowed";
        } // some validation function here

    return (
    <>
        <label htmlFor='planetName'>Planet Name:</label>
        <TextInput value={planetTextInputValue} onChange={(e) => {
                const errorMessage = validate(e.target.value);
				setErrorMessage(errorMessage);
                onChangePlanetText(e);
        }} />
        <Message message={errorMessage} />
    </>
)
};

export default PlanetName;
  