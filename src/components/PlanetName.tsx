import { useState } from 'react';
import Message from './Message';
import TextInput from './TextInput';

export interface PlanetNameProps {
    planetTextInputValue: string;
    onChangePlanetText: (e: any) => void;
    planetWarningMsg: string;
    setPlanetWarningMsg: (speciesNameWarningMsg: string)=>void;
}

const PlanetName: React.FC<PlanetNameProps> = ({planetTextInputValue, onChangePlanetText, planetWarningMsg, setPlanetWarningMsg}) => (
    <>
        <label htmlFor='planetName'>Planet Name:</label>
        {/* <TextInput value={planetTextInputValue} setValue={setPlanetTextInputValue} /> */}
        <TextInput value={planetTextInputValue} onChange={onChangePlanetText} />
        <Message message={planetWarningMsg} setMessage={setPlanetWarningMsg} />
    </>
);

export default PlanetName;
  