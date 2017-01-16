const calendarReducer = (state = 0, action) => {
	switch( action.type ){
		case 'SELECT_DATE':
			const { from, to } = action.payload
			return Object.assign(
				{},
				{ selectedDays: {
					from,
					to,
				}
			})
		default:
			return state
	}
}

export default calendarReducer