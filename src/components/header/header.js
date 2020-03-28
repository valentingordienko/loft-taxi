import React, {Component} from 'react';
import classNames from 'classnames';

import './header.scss';

const mainCssClass = 'header';

class Header extends Component {

	constructor(props) {
		super(props);

		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleLinkClick(event) {
		const {target} = event;
		const {onLinkClick} = this.props;
		if (target && target.id) {
			onLinkClick({
				event,
				linkId: target.id
			});
		}
	}

	render() {
		const {className, pages} = this.props;
		const classes = classNames(className, mainCssClass);

		return <div className={classes} onClick={this.handleLinkClick}>
			{pages && pages.length &&
			pages.map((page) => {
				return <a className={`${mainCssClass}__link`} id={page.id} href={page.href}>{page.caption}</a>
			})
			}
		</div>
	}
}

export default Header;