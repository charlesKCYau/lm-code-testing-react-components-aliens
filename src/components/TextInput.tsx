import { useState } from 'react';

interface TextInputProps {
    value: string;
    // setValue: (value: string)=>void;
    onChange: (e: any)=>void;
}

const TextInput: React.FC<TextInputProps> = ({value: value, onChange: onChangeSpeciesName}) => {
    return (
        <input className = "input" type="text" value={value} onChange={onChangeSpeciesName} />
    );
};

export default TextInput;
  