const getActiveStepIndex = (state) => {
	return state.steps.findIndex(cv => {
		if(cv.active === true) return true
	})
}

const getNextIndex = (state) => {
	return getActiveStepIndex(state) + 1
}

const getPreviousIndex = (state) => {
	return getActiveStepIndex(state) - 1
}

const bookingReducer = (state = 0, action) => {
	let index, nextIndex, previousIndex, steps, newState

	switch( action.type ){
		case 'NEXT_STEP':
			index = getActiveStepIndex(state)
			nextIndex = getNextIndex(state)
			steps = state.steps

			// Do nothing if next step doesn't exist
			if( steps[nextIndex] === undefined ){
				return state
			}

			newState = Object.assign({}, state)

			newState.steps[index].active = false
			newState.steps[nextIndex].active = true

			return newState

		case 'PREVIOUS_STEP':
			index = getActiveStepIndex(state)
			previousIndex = getPreviousIndex(state)
			steps = state.steps

			// Do nothing if previous step doesn't exist
			if( steps[previousIndex] === undefined ){
				return state
			}

			newState = Object.assign({}, state)

			newState.steps[index].active = false
			newState.steps[previousIndex].active = true

			return newState

		default:
			return state
	}
}

export default bookingReducer