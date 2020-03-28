import React, {Component} from 'react';
import classNames from 'classnames';
import pageData from "../../appData/pages";
import Header from "../../components/header";

import './mainLayout.scss';

const mainCssClass = 'main-layout';

class MainLayout extends Component {
	render() {
		const {className, children, onHeaderLinkClick} = this.props;
		const classes = classNames(className, mainCssClass);

		const headerItems = [
			{
				...pageData.map,
				caption: 'Карта'
			},
			{
				...pageData.profile,
				caption: 'Профиль'
			},
			{
				...pageData.login,
				caption: 'Выйти'
			}
		];

		return <div className={classes}>
			<Header className={`${mainCssClass}__header`} pages={headerItems} onLinkClick={onHeaderLinkClick}/>
			<div className={`${mainCssClass}__content`}>
				{children}
			</div>
		</div>
	}
}

export default MainLayout