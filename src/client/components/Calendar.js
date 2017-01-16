import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectDate } from '../actions/bookingActions'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'

// Styles
import '../styles/index.css'

// Localization
const MONTHS = [
	'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 
	'Augusti', 'September', 'Oktober', 'November', 'December'
]

const WEEKDAYS_LONG = [
	'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
]

const WEEKDAYS_SHORT = [
	'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'
]

class Calendar extends React.Component {

	constructor(props) {
		super(props)

		this.handleDayClick = this.handleDayClick.bind(this)
		this.isDaySelected = this.isDaySelected.bind(this)
	}

	handleDayClick(e, day, { disabled, selected }) {
		if( disabled ) return

		const { selectedDays } = this.props.calendar
		const { selectDate } = this.props.actions

		const range = DateUtils.addDayToRange(day, selectedDays)
		selectDate(range)
	}

	isDaySelected(day) {
		return DateUtils.isSameDay(day, this.state.selectedDay)
	}

	render() {
		const { from, to } = this.props.calendar.selectedDays

		return(
			<div styleName="calendar-container">
				<DayPicker
					locale="sv"
					months={MONTHS}
					weekdaysLong={WEEKDAYS_LONG}
					weekdaysShort={WEEKDAYS_SHORT}
					onDayClick={this.handleDayClick}
					disabledDays={ DateUtils.isPastDay }
					selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		calendar: state.calendar
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(
			{ selectDate },
			dispatch
		)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Calendar)