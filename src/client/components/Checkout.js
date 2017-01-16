import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class TakeMoney extends React.Component {

	onToken(token) {
		token.action = 'booking_create_booking'
		fetch('http://localhost/djupvik/wp-admin/admin-ajax.php', {
			mode: 'no-cors',
			method: 'POST',
			body: JSON.stringify(token),
		}).then(res => {
			res.json().then(data => {
				alert('We are in business', data.email)
			}).catch(err => {
				console.log(err)
			})
		}).catch(err => {
			console.log(err)
		})
	}

	render() {
		return(
			<StripeCheckout
				name="Djupvik Hotell"
				description="Boka ditt rum"
				locale="sv"
				image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
				token={this.onToken}
				stripeKey="pk_test_EpBZQ2dKLsVyXljGjM9rd28S"
				amount={1000}
				currency="SEK"
			/>
		)
	}

}

export default TakeMoney