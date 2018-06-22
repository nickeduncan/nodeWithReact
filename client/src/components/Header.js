import React, { Component } from 'react';
import Payments from './Payments';

class Header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Emaily
					</a>
					<ul className="right">
						<li key="1"><Payments /></li>
						<li key="2"><a>Login With Google</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
