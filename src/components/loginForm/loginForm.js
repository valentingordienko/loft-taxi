import React, {Component} from 'react';
import classNames from 'classnames';

import './loginForm.scss'

class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTypeSwitcherClick = this.handleTypeSwitcherClick.bind(this);
	}

	handleSubmit(event) {
		const {onSubmit} = this.props;
		event.preventDefault();
		if(onSubmit){
			onSubmit({event});
		}
	}

	handleTypeSwitcherClick(event) {
		const {onTypeSwitcherClick, isRegForm} = this.props;
		event.preventDefault();
		if(onTypeSwitcherClick){
			onTypeSwitcherClick({event, isRegForm});
		}
	}

	render() {
		const {className, isRegForm} = this.props;

		const submitButtonCaption = isRegForm ? 'Зарегистрироваться' : 'Войти';
		const formTypeSwitcherCaption = isRegForm ? 'Уже есть аккаунт' : 'Зарегистрироваться';

		const classes = classNames(className, 'login-form');

		return <form className={classes} onSubmit={this.handleSubmit}>
			<div className='login-form__item'>
				<input className='login-form__input' type="text" placeholder='email'/>
			</div>
			<div className='login-form__item'>
				<input className='login-form__input' type="text" placeholder='password'/>
			</div>
			{isRegForm &&
			<div className='login-form__item'>
				<input className='login-form__input' type="text" placeholder='repeat password'/>
			</div>
			}
			<div className='login-form__item'>
				<button type='submit'>{submitButtonCaption}</button>
			</div>
			<div className='login-form__item'>
				<a href='/' onClick={this.handleTypeSwitcherClick}>{formTypeSwitcherCaption}</a>
			</div>
		</form>
	}
}

export default LoginForm