import React, {Component} from 'react';
import classNames from 'classnames';
import RegLayout from "../../layouts/regLayout";

class LoginPage extends Component {
	render(){
		const {className} = this.props;
		const {onSubmit, onTypeSwitcherClick} = this.props;

		const classes = classNames(className, 'login-page');

		return <RegLayout
			className={classes}
			isRegForm={false}
			onSubmit={onSubmit}
			onTypeSwitcherClick={onTypeSwitcherClick}
		/>;
	}
}

export default LoginPage;