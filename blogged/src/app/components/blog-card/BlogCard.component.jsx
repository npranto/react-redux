import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './BlogCard.component.css';

export default class BlogCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="blog-card-component col s12 m6 l6">
		        <div className="card grey lighten-5">
					<div className="card-content black-text">
					  <span className="card-title"><strong> {this.props.blog.title} </strong></span>
					  <p className="blue-grey-text"> {this.props.blog.content} </p>
					</div>
					<div className="card-action">
					  <a href="/" className="blue-text"> Read More </a>
					</div>
		        </div>
			</div>
		)
	}
}







