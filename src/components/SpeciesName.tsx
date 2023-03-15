import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface SpeciesNameProps {
    speciesNameTextInputValue: string;
    onChangeSpeciesName: (e: any) => void;
    speciesNameWarningMsg: string;
    setSpeciesNameWarningMsg: (speciesNameWarningMsg: string)=>void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({speciesNameTextInputValue, onChangeSpeciesName, speciesNameWarningMsg, setSpeciesNameWarningMsg}) => (
        <>
            <label htmlFor='speciesName'>Species Name:</label>
            {/* <TextInput value={speciesNameTextInputValue} setValue={setSpeciesTextInputValue} /> */}
            <TextInput value={speciesNameTextInputValue} onChange={onChangeSpeciesName} />
            <Message message={speciesNameWarningMsg} setMessage={setSpeciesNameWarningMsg} />
        </>
);

export default SpeciesName;
  