// Modules
import React from 'react'

// Components
import Header from './containers/Header'
import Footer from './containers/Footer'
import Main from './containers/Main'

// Styles
import '../styles/booking.css'

const App = () => {
	return(
		<div styleName="form-container">
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App