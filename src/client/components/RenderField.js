import React from 'react'

// Styles
import '../styles/booking.css'

const RenderField = ({ 
	input,
	label,
	type,
	meta: {
		touched,
		error,
		warning,
	}
}) => {
	return(
		<div styleName="kb__form-group">
			<input 
				{...input} 
				placeholder={label}
				type={type}
				styleName={ 
					(touched && error) ? 
					'kb__form-text kb__form-text--error' : 
					'kb__form-text' }
			/>
			{ touched && (( error && 
				<span styleName="error-msg">{error}</span>))}
		</div>
	)
}

export default RenderField