import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

interface SpeciesNameProps {
    speciesNameTextInputValue: string;
    setSpeciesTextInputValue: (speciesNameTextInputValue: string)=>void;
    speciesNameWarningMsg: string;
    setSpeciesNameWarningMsg: (speciesNameWarningMsg: string)=>void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesNameTextInputValue, setSpeciesTextInputValue, speciesNameWarningMsg, setSpeciesNameWarningMsg}) => {
    return (
        <label>Species Name:
            <TextInput value={speciesNameTextInputValue} setValue={setSpeciesTextInputValue} />
            <Message message={speciesNameWarningMsg} setMessage={setSpeciesNameWarningMsg} />
        </label>
    );
};

export default SpeciesName;
  