import React from 'react'
import { reduxForm } from 'redux-form'
import BookingDetails from './BookingDetails'

class BookingForm extends React.Component {

	constructor(props) {
		super(props)
	}
	
	render() {
		const { handleSubmit } = this.props
		
		return(
			<BookingDetails 
				handleSubmit={handleSubmit} />
		)
	}

}

BookingForm = reduxForm({
	form: 'bookingDetails',
	destroyOnUnmount: false,
})(BookingForm)

export default BookingForm