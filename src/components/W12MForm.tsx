import { useState } from 'react';
import W12MHeader from './W12MHeader';
import W12MFormBody from './W12MBody';
import { W12MFormBodyProps } from './W12MBody';

const emptyForm: W12MFormBodyProps = {
	speciesName: "",
	planet: "",
	noOfBeings: "",
	sum: "",
	sparingReason: "",
}

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
			<W12MFormBody {...emptyForm}/>
		</section>
	);
};

export default W12MForm;
