import React from 'react'
import StepItem from './StepItem'
import '../styles/booking.css'

const StepList = ({
	steps
}) => {
	return(
		<div styleName="kb__progressBars">
			{steps.map((step, i) => {
				return(
					<StepItem
						key={i}
						active={step.active}
						label={step.label}
					/>
				)
			})}
		</div>
	)
}

export default StepList