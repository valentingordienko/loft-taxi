import React, {Component} from 'react';
import MainLayout from "../../layouts/mainLayout";

class ProfilePage extends Component {
	constructor(props){
		super(props);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange({event, linkId}) {
		if(event) {
			event.preventDefault();
		}

		if(linkId) {
			const {onPageChange} = this.props;
			onPageChange({targetPage: linkId});
		}
	}

	render(){
		return <MainLayout onHeaderLinkClick={this.handlePageChange}>
			Настройки профиля
		</MainLayout>
	}
}

export default ProfilePage;