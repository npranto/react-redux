import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.component.css';


export default class NavigationBar extends Component {
	constructor(props) {
		super(props);
		
		this.handleSideBar = this.handleSideBar.bind(this);

		this.handleSideBar();
	}

	handleSideBar(){
		$( document ).ready(function(){
			$(".button-collapse").sideNav();
		})
	}

	render() {
		return (
			<div className="navigation-bar-component col s12 m12 l12">
				<nav className="nav-extended col s12 m12 l12">
			    <div className="nav-wrapper col s12 m12 l12">
			      <a className="brand-logo pacifico"> Blogged </a>
			      <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      	<li><Link to="/features"> Features </Link></li>
			        <li><Link to="/blog"> Blog of the Day </Link></li>
			        <li><Link to="/"> Blogs </Link></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			      	<li><Link to="/features"> Features </Link></li>
			        <li><Link to="/blog/1"> Blog of the Day </Link></li>
			        <li><Link to="/"> Blogs </Link></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
}







