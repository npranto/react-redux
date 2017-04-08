import React, {Component} from 'react';

import './SearchBar.component.css';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
		this.updateSearchTerm = this.updateSearchTerm.bind(this);
		this.search = this.search.bind(this);
		this.clearSearchField = this.clearSearchField.bind(this);
	}

	// updates state with input changes
	updateSearchTerm(event) {
		this.setState({
			searchTerm: event.target.value
		})
		console.log(event.target.value);
	}

	// searches term based of 'searchTerm' prop in state
	search(event) {
		console.log(this.state.searchTerm);
		event.preventDefault();
	}

	// clears input field when 'x' is clicked
	clearSearchField(event) {
		this.setState({
			searchTerm: ''
		})
		console.log(this.state.searchTerm);
	}

	render() {
		return (
			<nav>
		    <div className="nav-wrapper">
		      <form onSubmit={this.search}>
		        <div className="input-field">
		          <input 
		          	id="search" 
		          	type="search"
		          	value={this.state.searchTerm}
		          	placeholder="Search for city, i.e., Boston"
		          	onChange={this.updateSearchTerm} 
		          	required />
		          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
		          <i className="material-icons" onClick={this.clearSearchField}>close</i>
		        </div>
		      </form>
		    </div>
		  </nav>
		)
	}

}

export default SearchBar;
