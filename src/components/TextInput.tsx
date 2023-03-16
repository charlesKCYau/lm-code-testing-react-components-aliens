import { useState } from 'react';

export interface TextInputProps {
    value: string;
    onChange: (e: any)=>void;
}

const TextInput: React.FC<TextInputProps> = ({value: value, onChange: onChangeSpeciesName}) => {
    return (
        <input className = "input" type="text" value={value} onChange={onChangeSpeciesName} />
    );
};

export default TextInput;
  