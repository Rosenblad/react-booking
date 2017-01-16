export default {
	booking: {
		steps: [
			{
				name: 'calendar',
				label: 'Date',
				active: true,
			},
			{
				name: 'form',
				label: 'Details',
				active: false,
			},
			{
				name: 'payment',
				label: 'Payment',
				active: false,
			}
		],
	},
	calendar: {
		selectedDays: {
			from: null,
			to: null,
		}
	}
}