import { useState } from 'react';
import W12MHeader from './W12MHeader';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SparingReason from './SparingReason';
import SpeciesName from './SpeciesName';
import ValueOfSum from './ValueOfSum';

const W12MForm = () => {
    const [ speciesNameTextInputValue, setSpeciesTextInputValue ] = useState<string>('');
    // const [ speciesNameWarningMsg, setSpeciesNameWarningMsg ] = useState<string>('');
    const [ planetTextInputValue, setPlanetTextInputValue ] = useState<string>('');
    // const [ planetWarningMsg, setPlanetWarningMsg ] = useState<string>('');
    const [ noOfBeingsTextInputValue, setNoOfBeingsTextInputValue ] = useState<string>('');
    // const [ noOfBeingsWarningMsg, setNoOfBeingsWarningMsg ] = useState<string>('');
    const [ valueOfSum, setValueOfSum ] = useState<string>('');
    // const [ valueOfSumWarningMsg, setValueOfSumWarningMsg ] = useState<string>('');
    const [ sparingReasonInputValue, setSparingReasonInputValue ] = useState<string>('');
    // const [ sparingReasonWarningMsg, setSparingReasonWarningMsg ] = useState<string>('');
    
    const submitForm = () => {
        // (speciesNameTextInputValue.trim()) === "" ? setSpeciesNameWarningMsg('Species Name cannot be empty') : setSpeciesNameWarningMsg('');
        // (planetTextInputValue.trim()) === "" ? setPlanetWarningMsg('Planet Name cannot be empty') : setPlanetWarningMsg('');
        // (noOfBeingsTextInputValue.trim()) === "" ? setNoOfBeingsWarningMsg('Number of beings cannot be empty') : setNoOfBeingsWarningMsg('');
        // (!parseInt(noOfBeingsTextInputValue,10)) ? setNoOfBeingsWarningMsg('Number of beings cannot be non-integer') : setNoOfBeingsWarningMsg('');
        // (valueOfSum) !== "4" ? setValueOfSumWarningMsg('Answer is incorrect') : setValueOfSumWarningMsg('');
        // (sparingReasonInputValue.trim()) === "" ? setSparingReasonWarningMsg('Sparing Reason cannot be empty') : setSparingReasonWarningMsg('');
        
		console.log("Species Name: ", speciesNameTextInputValue.trim());
		console.log("Planet Name: ", planetTextInputValue.trim());
		console.log("Number of Beings: ", noOfBeingsTextInputValue.trim());
		console.log("2 + 2 = ", valueOfSum);
		console.log("Reason of Sparing: ", sparingReasonInputValue.trim());
    }

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
			{/* <W12MFormBody {...emptyForm}/> */}
			<form className="form__container form form__text">
				{/* <SpeciesName speciesNameTextInputValue={speciesNameTextInputValue} onChangeSpeciesName={(e : any) => setSpeciesTextInputValue(e.target.value)} speciesNameWarningMsg={speciesNameWarningMsg} setSpeciesNameWarningMsg={setSpeciesNameWarningMsg} /> */}
				<SpeciesName speciesNameTextInputValue={speciesNameTextInputValue} onChangeSpeciesName={(e : any) => setSpeciesTextInputValue(e.target.value)} />

				{/* <PlanetName planetTextInputValue={planetTextInputValue} onChangePlanetText={(e : any) => setPlanetTextInputValue(e.target.value)}  planetWarningMsg={planetWarningMsg} setPlanetWarningMsg={setPlanetWarningMsg} /> */}
				<PlanetName planetTextInputValue={planetTextInputValue} onChangePlanetText={(e : any) => setPlanetTextInputValue(e.target.value)} />

				{/* <NumberOfBeings noOfBeingsTextInputValue={noOfBeingsTextInputValue} onChangeNoOfBeings={(e : any) => setNoOfBeingsTextInputValue(e.target.value)} noOfBeingsWarningMsg={noOfBeingsWarningMsg} setNoOfBeingsWarningMsg={setNoOfBeingsWarningMsg} /> */}
				<NumberOfBeings noOfBeingsTextInputValue={noOfBeingsTextInputValue} onChangeNoOfBeings={(e : any) => setNoOfBeingsTextInputValue(e.target.value)} />

				{/* <ValueOfSum valueOfSum={valueOfSum} onChangeSumValue={(e : any) => setValueOfSum(e.target.value)}  valueOfSumWarningMsg={valueOfSumWarningMsg} setValueOfSumWarningMsg={setValueOfSumWarningMsg} /> */}
				<ValueOfSum valueOfSum={valueOfSum} onChangeSumValue={(e : any) => setValueOfSum(e.target.value)} />
			
				{/* <SparingReason sparingReasonInputValue={sparingReasonInputValue} onChangeSparingReason={(e : any) => setSparingReasonInputValue(e.target.value)}  sparingReasonWarningMsg={sparingReasonWarningMsg} setSparingReasonWarningMsg={setSparingReasonWarningMsg} /> */}
				<SparingReason sparingReasonInputValue={sparingReasonInputValue} onChangeSparingReason={(e : any) => setSparingReasonInputValue(e.target.value)} />

				<button className = "button" type="button" onClick={(event) => {submitForm()}}>Submit Form</button>
			</form>
		</section>
	);
};

export default W12MForm;
