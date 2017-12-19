import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {
  Link
} from 'react-router-dom';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		}
	}

	handleDrawer() {
		this.setState({open: !false});
	}

	render () {
		return (
			<div>
				<AppBar
					title="Welcome to React"
					iconClassNameRight="muidocs-icon-navigation-expand-more App-header"
					onLeftIconButtonTouchTap={(this.handleDrawer).bind(this)}
				/>

				<Drawer open={this.state.open}>
					<MenuItem containerElement={<Link to="/" />}>Home</MenuItem>
				</Drawer>
			</div>
		)
	}
}

export default Nav;
