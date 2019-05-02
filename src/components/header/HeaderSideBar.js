import React, { Component } from 'react';

import { observer } from 'mobx-react';
import RootStore from '../../store/RootStore';

import './HeaderSideBar.css';
import HeaderNavLoggedIn from './HeaderNavLoggedIn';

class HeaderSideBar extends Component {

	render(){
		return (
			<div className="sidebar bg-primary">
				<h4 className="title">My Goals</h4>
				<div className="nav flex-column align-items-center">
					<HeaderNavLoggedIn/>
					{RootStore.store.ui.renderDropDown}
				</div>
			</div>
		);
	}
}

export default observer(HeaderSideBar);