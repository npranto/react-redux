import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CreateBlogFixedButton.component.css';

class CreateBlogFixedButton extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="fixed-action-btn">
			    <Link to="/create" className="btn-floating btn-large red">
			      <i className="large material-icons">mode_edit</i>
			    </Link>
			</div>
		)
	}
}

export default CreateBlogFixedButton;