import React from 'react'
import { Field } from 'redux-form'
import validator from 'validator'

// Components
import MenuItem from 'material-ui/MenuItem'
import RenderSelectField from './RenderSelectField'
import RenderField from './RenderField'

// Styles
import '../styles/booking.css'

const required = value => value ? undefined : 'Required'
const email = (value) => 
	validator.isEmail(value) ? null : 'Invalid email'


const BookingDetails = () => {
	return(
		<form styleName="booking-form">
			<Field
				name="name"
				type="text"
				component={RenderField}
				label="name"
				validate={[ required ]}
			/>
			<Field 
				name="email" 
				component={RenderField} 
				type="email"
				label="your email"
				validate={[ required, email ]}
			/>
			<Field 
				name="phone" 
				component={RenderField} 
				type="tel"
				label="your phone number"
				validate={[ required ]}
			/>
			<div styleName="kb__form-group">
				<Field
					name="adress"
					component="input"
					type="text"
					placeholder="your adress"
					styleName="kb__form-text"
				/>
			</div>
			<div styleName="kb__form-group">
				<Field
					name="postcode"
					component="input"
					type="text"
					placeholder="your post code"
					styleName="kb__form-text"
				/>
			</div>
			<div styleName="kb__form-group">
				<Field
					name="city"
					component="input"
					type="text"
					placeholder="your city"
					styleName="kb__form-text"
				/>
			</div>
			<Field
				name="adults"
				component={RenderSelectField}
				label="adults"
			>
				<MenuItem value={1} primaryText="1" />
				<MenuItem value={2} primaryText="2" />
			</Field>
			<Field
				name="children"
				component={RenderSelectField}
				label="children"
			>
				<MenuItem value={1} primaryText="1" />
				<MenuItem value={2} primaryText="2" />
			</Field>
		</form>
	)
}

export default BookingDetails