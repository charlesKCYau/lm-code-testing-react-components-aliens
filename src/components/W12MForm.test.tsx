import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import { SpeciesNameProps} from './SpeciesName';
import PlanetName from './PlanetName';
import { PlanetNameProps} from './PlanetName';
import W12MForm from './W12MForm';
import NumberOfBeings from './NumberOfBeings';
import { NumberOfBeingsProps } from './NumberOfBeings';
import ValueOfSum from './ValueOfSum';
import { ValueOfSumProps } from './ValueOfSum';
import SparingReason from './SparingReason';
import { SparingReasonProps } from './SparingReason';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');

});

test('renders form objects', () => {
	const speciesNameProps: SpeciesNameProps = {
		speciesNameTextInputValue: "speciesName",
		onChangeSpeciesName: () => {},
		speciesNameWarningMsg: "speciesNameWarningMsg",
		setSpeciesNameWarningMsg: () => {},
	}

	render(<SpeciesName {...speciesNameProps}/>);
	let labelNameText = screen.getByText(
		/Species Name/i
	);
	expect(labelNameText).toBeInTheDocument();

	const planetNameProps: PlanetNameProps = {
		planetTextInputValue: "planetName",
		onChangePlanetText: () => {},
		planetWarningMsg: "planetWarningMsg",
		setPlanetWarningMsg: () => {},
	}

	render(<PlanetName {...planetNameProps}/>);
	labelNameText = screen.getByText(
		/Planet Name/i
	);
	expect(labelNameText).toBeInTheDocument();

	const numberOfBeingsProps: NumberOfBeingsProps = {
		noOfBeingsTextInputValue: "noOfBeings",
		onChangeNoOfBeings: () => {},
		noOfBeingsWarningMsg: "noOfBeingsWarningMsg",
		setNoOfBeingsWarningMsg: () => {},
	}

	render(<NumberOfBeings {...numberOfBeingsProps}/>);
	labelNameText = screen.getByText(
		/Number of beings/i
	);
	expect(labelNameText).toBeInTheDocument();

	const valueOfSumProps: ValueOfSumProps = {
		valueOfSum: "valueOfSum",
		onChangeSumValue: () => {},
		valueOfSumWarningMsg: "valueOfSumWarningMsg",
		setValueOfSumWarningMsg: () => {},
	}

	render(<ValueOfSum {...valueOfSumProps}/>);
    labelNameText = screen.getByText(
		/What is 2 \+ 2 \?/i
	);
	expect(labelNameText).toBeInTheDocument();

	const sparingReasonProps: SparingReasonProps = {
		sparingReasonInputValue: "sparingReasonInputValue",
		onChangeSparingReason: () => {},
		sparingReasonWarningMsg: "sparingReasonWarningMsg",
		setSparingReasonWarningMsg: () => {},
	}

	render(<SparingReason {...sparingReasonProps}/>);
    labelNameText = screen.getByText(
		/Reason for sparing/i
	);
	expect(labelNameText).toBeInTheDocument();

    // labelNameText = screen.getByText(
	// 	/Submit Form/i
	// );
	// expect(labelNameText).toBeInTheDocument();

});

