import React from 'react'

// Components
import SelectField from 'material-ui/SelectField'

// Styles
import '../styles/booking.css'

const RenderSelectField = ({
	input, 
	label, 
	meta: { touched, error }, 
	children,
	custom,
}) => {
	return(
		<div className="kb__form-group">
			<SelectField
				floatingLabelText={label}
				children={children}
				{...input}
				onChange={(event, index, value) =>
					input.onChange(value)}
				{...custom}
			/>
		</div>
	)
}

export default RenderSelectField