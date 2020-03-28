import React, {Component} from 'react';
import RegLayout from "../../layouts/regLayout";
import classNames from "classnames";

class SigninPage extends Component {
	render(){
		const {className} = this.props;
		const {onSubmit, onTypeSwitcherClick} = this.props;

		const classes = classNames(className, 'signin-page');

		return <RegLayout
			className={classes}
			isRegForm={true}
			onSubmit={onSubmit}
			onTypeSwitcherClick={onTypeSwitcherClick}
		/>;
	}
}

export default SigninPage;