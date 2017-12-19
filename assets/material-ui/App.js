import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './lib/routes';
import './style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = (props) => {
	return (
		<MuiThemeProvider>
    		<Router>
				<Routes />
    		</Router>
  		</MuiThemeProvider>
	)
}

export default App;
