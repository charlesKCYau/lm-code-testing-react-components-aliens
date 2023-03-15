import { useState } from 'react';

interface TextInputProps {
    value: string;
    setValue: (value: string)=>void;
}

const TextInput: React.FC<TextInputProps> = ({value: value, setValue: setValue}) => {
    return (
        <input className = "input" type="text" value={value} onChange={(event) => { setValue(event.target.value)}}/>
    );
};

export default TextInput;
  