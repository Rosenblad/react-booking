// Modules
import React from 'react'
import { connect } from 'react-redux'

// Components
import StepList from '../StepList'

// Styles
import '../../styles/booking.css'

class Header extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const { steps } = this.props.booking

		return(
			<header>
				<h3 styleName="form-title">BOOK A ROOM</h3>
				<StepList
					steps={steps}
				/>
			</header>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		booking: state.booking
	}
}

export default connect(
	mapStateToProps
)(Header)