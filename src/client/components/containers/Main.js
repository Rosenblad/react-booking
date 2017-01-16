import React from 'react'
import { connect } from 'react-redux'

// Components
import Calendar from '../Calendar'
import BookingForm from '../BookingForm'
import Checkout from '../Checkout'

class Main extends React.Component {

	constructor(props) {
		super(props)
	}

	getActiveStepComponent() {
		const { steps } = this.props.booking
		const activeStep = steps.find((step) => {
			if( step.active ) return true
		})

		switch( activeStep.name ){
			case 'calendar':
				return <Calendar />
			case 'form':
				return <BookingForm />
			case 'payment':
				return <Checkout />
			default:
				return <Calendar />
		}
	}

	render() {
		return(
			<main>
			{this.getActiveStepComponent()}
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		booking: state.booking
	}
}

export default connect(mapStateToProps)(Main)