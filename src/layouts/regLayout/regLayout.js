import React, {Component} from 'react';
import classNames from 'classnames';
import LoginForm from "../../components/loginForm/loginForm";

import './regLayout.scss'

class RegLayout extends Component {
	render(){
		const {className, isRegForm} = this.props;
		const {onSubmit, onTypeSwitcherClick} = this.props;

		const classes = classNames(className, 'reg-layout');

		return <div className={classes}>
			<LoginForm
				className='reg-layout__form'
				isRegForm={isRegForm}
				onTypeSwitcherClick={onTypeSwitcherClick}
				onSubmit={onSubmit}
			/>
		</div>
	}
}

export default RegLayout