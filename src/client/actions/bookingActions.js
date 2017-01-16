export const nextStep = () => {
	return {
		type: 'NEXT_STEP',
	}
}

export const previousStep = () => {
	return {
		type: 'PREVIOUS_STEP',
	}
}

export const selectDate = ({ from, to }) => {
	return {
		type: 'SELECT_DATE',
		payload: {
			from,
			to
		}
	}
}