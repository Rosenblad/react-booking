import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { nextStep, previousStep } from '../../actions/bookingActions'
import { bindActionCreators } from 'redux'

class Footer extends React.Component {

	constructor(props) {
		super(props)

		this.handleNextClick = this.handleNextClick.bind(this)
		this.handlePreviousClick = this.handlePreviousClick.bind(this)
	}

	handleNextClick() {
		const { nextStep } = this.props.actions
		nextStep()
	}

	handlePreviousClick() {
		const { previousStep } = this.props.actions
		previousStep()
	}

	getActiveStepIndex() {
		const { steps } = this.props.booking

		return steps.findIndex((step) => {
			if( step.active ) return true
		})
	}

	render() {
		const activeStepIndex = this.getActiveStepIndex()

		return(
			<footer>
				{ (activeStepIndex !== 0) ?
					<RaisedButton 
						label="Back" 
						onClick={this.handlePreviousClick} 
					/> : '' }
				{ (activeStepIndex !== 2 ) ?
					<RaisedButton 
						label="Next"
						onClick={this.handleNextClick}
						style={{ marginLeft: 'auto' }}
					/> : '' }
			</footer>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		booking: state.booking
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		actions: bindActionCreators(
			{ nextStep, previousStep },
			dispatch
		) 
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)