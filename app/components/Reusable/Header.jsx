import React from 'react';
import auth from '../../utils/auth.js';
import AppStoreIcon from './AppStoreIcon.jsx';
import Login from './Login.jsx';
import BackButton from './BackButton.jsx';
import UserHeader from './UserHeader.jsx';
import TruckButton from './TruckButton.jsx';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: auth.loggedIn()
		};
	}

	componentWillMount() {
		auth.onChange = this.updateAuth;
		const email = localStorage.getItem('email');
		const pass = localStorage.getItem('password');
		if (this.state.loggedIn === true) {
			auth.login(email, pass).
			then((response) => {
				console.log(response);
				auth.onChange(true);
			})
			.catch((err) => {
				console.log(err);
				auth.onChange(false);
			});
		}
	}

	updateAuth(loggedIn) {
		this.setState({ loggedIn });
	}

	render() {
		let headerButton = <AppStoreIcon />;
		let logInButton = <Login />;

		if (window.location.pathname === '/donation') {
			headerButton = <TruckButton />;
		} else if (window.location.pathname === '/thankyou') {
			headerButton = '';
		} else if (window.location.pathname !== '/') {
			headerButton = <BackButton />;
		}

		if (window.location.pathname !== '/thankyou' && (this.state.loggedIn || window.location.pathname === '/donation')) {
			logInButton = <UserHeader />;
		} else if (window.location.pathname === '/thankyou') {
			logInButton = '';
		}
		return (
			<div className={window.location.pathname === '/donation' ? 'donation-header text-flex' : 'header text-flex'}>
				{headerButton}
				{logInButton}
			</div>
		);
	}
}

module.exports = Header;