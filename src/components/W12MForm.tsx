import { useState } from 'react';
import W12MHeader from './W12MHeader';
import NumberOfBeings from './NumberOfBeings';
import PlanetName from './PlanetName';
import SparingReason from './SparingReason';
import SpeciesName from './SpeciesName';
import ValueOfSum from './ValueOfSum';

const W12MForm = () => {
	const [ speciesNameTextInputValue, setSpeciesTextInputValue ] = useState<string>('');
    const [ planetTextInputValue, setPlanetTextInputValue ] = useState<string>('');
    const [ noOfBeingsTextInputValue, setNoOfBeingsTextInputValue ] = useState<string>('');
    const [ valueOfSum, setValueOfSum ] = useState<string>('');
    const [ sparingReasonInputValue, setSparingReasonInputValue ] = useState<string>('');
    
    const submitForm = () => {
		console.log("Species Name: ", speciesNameTextInputValue.trim());
		console.log("Planet Name: ", planetTextInputValue.trim());
		console.log("Number of Beings: ", noOfBeingsTextInputValue.trim());
		console.log("2 + 2 = ", valueOfSum);
		console.log("Reason of Sparing: ", sparingReasonInputValue.trim());
    }

	const [buttonText, setButtonText] = useState("Submit Form");

	const changeText = (text:string) => setButtonText(text);

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
			<form className="form__container form form__text" onSubmit={() => changeText("newText")}>
				<SpeciesName speciesNameTextInputValue={speciesNameTextInputValue} onChangeSpeciesName={(e : any) => setSpeciesTextInputValue(e.target.value)} />

				<PlanetName planetTextInputValue={planetTextInputValue} onChangePlanetText={(e : any) => setPlanetTextInputValue(e.target.value)} />

				<NumberOfBeings noOfBeingsTextInputValue={noOfBeingsTextInputValue} onChangeNoOfBeings={(e : any) => setNoOfBeingsTextInputValue(e.target.value)} />

				<ValueOfSum valueOfSum={valueOfSum} onChangeSumValue={(e : any) => setValueOfSum(e.target.value)} />
			
				<SparingReason sparingReasonInputValue={sparingReasonInputValue} onChangeSparingReason={(e : any) => setSparingReasonInputValue(e.target.value)} />

				<button className = "button" type="submit" value="Submit" onClick={(event) => {submitForm()}}>{buttonText}</button>
			</form>
		</section>
	);
};

export default W12MForm;
