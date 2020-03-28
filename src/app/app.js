import React, {Component} from 'react';
import pageData from "../appData/pages";
import LoginPage from '../pages/login';
import SigninPage from '../pages/signin';
import MapPage from '../pages/map';
import ProfilePage from '../pages/profile';
import './app.scss';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentPage: pageData.login.id
		};
		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleLoginTypeChange = this.handleLoginTypeChange.bind(this);
		this.handleRegistration = this.handleRegistration.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handlePageChange({targetPage}) {
		this.setState({
			currentPage: targetPage,
		})
	}

	handleLoginTypeChange({event, isRegForm}) {
		event.stopPropagation();
		let targetPage = pageData.login.id;
		if (!isRegForm) {
			targetPage = pageData.signin.id;
		}
		this.handlePageChange({targetPage});
	}

	handleRegistration({event}) {
		event.stopPropagation();
		this.handlePageChange({targetPage: pageData.login.id});
	}

	handleLogin({event}) {
		event.stopPropagation();
		this.handlePageChange({targetPage: pageData.map.id});
	}

	render() {
		const {currentPage} = this.state;
		let Component = null;
		switch (currentPage) {
			case pageData.login.id:
				Component = <LoginPage onSubmit={this.handleLogin} onTypeSwitcherClick={this.handleLoginTypeChange}/>;
				break;
			case pageData.signin.id:
				Component = <SigninPage onSubmit={this.handleRegistration} onTypeSwitcherClick={this.handleLoginTypeChange}/>;
				break;
			case pageData.map.id:
				Component = <MapPage onPageChange={this.handlePageChange}/>;
				break;
			case pageData.profile.id:
				Component = <ProfilePage onPageChange={this.handlePageChange}/>;
				break;
			default:
				break;
		}
		return (
			<div className="App">
				{Component}
			</div>
		);
	}
}

export default App;
