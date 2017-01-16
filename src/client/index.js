// Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Styles
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Reducers
import calendarReducer from './reducers/calendarReducer'
import { reducer as formReducer } from 'redux-form'
import bookingReducer from './reducers/bookingReducer'
import initialState from './reducers/initialState'

// Components
import App from './components/App'

// Used by material-ui
injectTapEventPlugin()

// Reducer
const reducer = combineReducers({
	form: formReducer,
	booking: bookingReducer,
	calendar: calendarReducer,
})

// Store
const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// roomType: ['single', 'double']
// dateRange: ...
// Name: ...

// message

// price

const AppContainer = () => {
	return(
		<MuiThemeProvider>
			<App />
	  </MuiThemeProvider>
  )
}

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('root')
)