import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

interface PlanetNameProps {
    planetTextInputValue: string;
    setPlanetTextInputValue: (speciesNameTextInputValue: string)=>void;
    planetWarningMsg: string;
    setPlanetWarningMsg: (speciesNameWarningMsg: string)=>void;
}

const PlanetName: React.FC<PlanetNameProps> = ({planetTextInputValue: planetTextInputValue, setPlanetTextInputValue: setPlanetTextInputValue, planetWarningMsg: planetWarningMsg, setPlanetWarningMsg: setPlanetWarningMsg}) => {
    return (
        <label>Planet Name:
            <TextInput value={planetTextInputValue} setValue={setPlanetTextInputValue} />
            <Message message={planetWarningMsg} setMessage={setPlanetWarningMsg} />
        </label>
    );
};

export default PlanetName;
  