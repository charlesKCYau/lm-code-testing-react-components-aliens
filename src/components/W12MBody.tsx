import { useState } from 'react';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SparingReason from './SparingReason';
import SpeciesName from './SpeciesName';
import ValueOfSum from './ValueOfSum';

export interface W12MFormBodyProps {
	speciesName: string;
	planet: string;
	noOfBeings: string;
	sum: string;
	sparingReason: string;
    clickFn?: () => void;
}

// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element
const W12MFormBody: React.FC<W12MFormBodyProps> = ({
    speciesName,
    planet,
    noOfBeings,
    sum,
    sparingReason,
    clickFn: submitForm,
}) => {
    // function Form(FormProps): JSX.Element {
    const [ speciesNameTextInputValue, setSpeciesTextInputValue ] = useState<string>('');
    const [ speciesNameWarningMsg, setSpeciesNameWarningMsg ] = useState<string>('');
    const [ planetTextInputValue, setPlanetTextInputValue ] = useState<string>('');
    const [ planetWarningMsg, setPlanetWarningMsg ] = useState<string>('');
    const [ noOfBeingsTextInputValue, setNoOfBeingsTextInputValue ] = useState<string>('');
    const [ noOfBeingsWarningMsg, setNoOfBeingsWarningMsg ] = useState<string>('');
    const [ valueOfSum, setValueOfSum ] = useState<string>('');
    const [ valueOfSumWarningMsg, setValueOfSumWarningMsg ] = useState<string>('');
    const [ sparingReasonInputValue, setSparingReasonInputValue ] = useState<string>('');
    const [ sparingReasonWarningMsg, setSparingReasonWarningMsg ] = useState<string>('');
    
    submitForm = () => {
        (speciesNameTextInputValue.trim()) === "" ? setSpeciesNameWarningMsg('Species Name cannot be empty') : setSpeciesNameWarningMsg('');
        (planetTextInputValue.trim()) === "" ? setPlanetWarningMsg('Planet Name cannot be empty') : setPlanetWarningMsg('');
        (noOfBeingsTextInputValue.trim()) === "" ? setNoOfBeingsWarningMsg('Number of beings cannot be empty') : setNoOfBeingsWarningMsg('');
        (!parseInt(noOfBeingsTextInputValue,10)) ? setNoOfBeingsWarningMsg('Number of beings cannot be non-integer') : setNoOfBeingsWarningMsg('');
        (valueOfSum) !== "equal4" ? setValueOfSumWarningMsg('Answer is incorrect') : setValueOfSumWarningMsg('');
        (sparingReasonInputValue.trim()) === "" ? setSparingReasonWarningMsg('Sparing Reason cannot be empty') : setSparingReasonWarningMsg('');
    }
      
    return (
        <form className="form__container form form__text">
            <SpeciesName speciesNameTextInputValue={speciesNameTextInputValue} setSpeciesTextInputValue={setSpeciesTextInputValue}  speciesNameWarningMsg={speciesNameWarningMsg}  setSpeciesNameWarningMsg={setSpeciesNameWarningMsg} />

            <PlanetName planetTextInputValue={planetTextInputValue} setPlanetTextInputValue={setPlanetTextInputValue}  planetWarningMsg={planetWarningMsg}  setPlanetWarningMsg={setPlanetWarningMsg} />

            <NumberOfBeings noOfBeingsTextInputValue={noOfBeingsTextInputValue} setNoOfBeingsTextInputValue={setNoOfBeingsTextInputValue}  noOfBeingsWarningMsg={noOfBeingsWarningMsg}  setNoOfBeingsWarningMsg={setNoOfBeingsWarningMsg} />

            <ValueOfSum valueOfSum={valueOfSum} setValueOfSum={setValueOfSum}  valueOfSumWarningMsg={valueOfSumWarningMsg}  setValueOfSumWarningMsg={setValueOfSumWarningMsg} />
          
            <SparingReason sparingReasonInputValue={sparingReasonInputValue} setSparingReasonInputValue={setSparingReasonInputValue}  sparingReasonWarningMsg={sparingReasonWarningMsg}  setSparingReasonWarningMsg={setSparingReasonWarningMsg} />

           <button className = "button" type="button" onClick={(event) => {submitForm && submitForm()}}>Submit Form</button>
        </form>
    );
}

export default W12MFormBody;
