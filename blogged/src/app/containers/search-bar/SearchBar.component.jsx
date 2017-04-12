import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './SearchBar.component.css';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="search-bar-component col s12 m8 offset-m2 l6 offset-l3">

				<nav>
					<div className="nav-wrapper">
					  <form>
					    <div className="input-field">
					      <input id="search" type="search" required />
					      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
					      <i className="material-icons">close</i>
					    </div>
					  </form>
					</div>
				</nav>

			</div>
		)
	}
}







