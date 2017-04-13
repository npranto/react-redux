import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './Blog.component.css';

export default class Blog extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="blog-component col s12 m6 l6">
		        <div className="card blue-grey darken-1">
					<div className="card-content white-text">
					  <span className="card-title"> {this.props.blog.title} </span>
					  <p> {this.props.blog.content} </p>
					</div>
					<div className="card-action">
					  <a href="/"> Read More </a>
					</div>
		        </div>
			</div>
		)
	}
}







