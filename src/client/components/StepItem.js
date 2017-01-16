import React from 'react'
import '../styles/booking.css'

const StepBar = ({
	active,
	label
}) => {
	return(
		<div 
			styleName={ active ? 'kb__progressBar kb__progressbar--active' : 'kb__progressBar' }>
			<div styleName="kb__progressBarTitle">
				{label}
			</div>
		</div>
	)
}

export default StepBar