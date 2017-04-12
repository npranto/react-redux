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
			      <a href="#" className="brand-logo pacifico"> Blogged </a>
			      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      	<li><a href="badges.html"><Link to="/features"> Features </Link></a></li>
			        <li><a href="badges.html"><Link to="/blog/1"> Blog of the Day </Link></a></li>
			        <li><a href="collapsible.html"><Link to="/"> Blogs </Link></a></li>
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			      	<li><a href="badges.html"><Link to="/features"> Features </Link></a></li>
			        <li><a href="badges.html"><Link to="/blog/1"> Blog of the Day </Link></a></li>
			        <li><a href="collapsible.html"><Link to="/"> Blogs </Link></a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		)
	}
}







