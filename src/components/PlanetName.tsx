import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface PlanetNameProps {
    planetTextInputValue: string;
    onChangePlanetText: (e: any) => void;
    // planetWarningMsg: string;
    // setPlanetWarningMsg: (speciesNameWarningMsg: string)=>void;
}

// const PlanetName: React.FC<PlanetNameProps> = ({planetTextInputValue, onChangePlanetText, planetWarningMsg, setPlanetWarningMsg}) => {
const PlanetName: React.FC<PlanetNameProps> = ({planetTextInputValue, onChangePlanetText}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
	const validate = (inputValue:string) => {
        const noSpecialChars = inputValue.replace(/[^a-zA-Z0-9 ]/g, '');
        if (inputValue.length < 2) return "too short";
        if (inputValue.length > 49) return "too long";
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
        {/* <Message message={planetWarningMsg} setMessage={setPlanetWarningMsg} /> */}
        <Message message={errorMessage} />
    </>
)
};

export default PlanetName;
  