import React, {Component} from 'react';

import './SearchBar.component.css';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	updateSearchTerm(event) {
		this.setState({
			searchTerm: event.target.value
		})
		console.log(event.target.value);
	}

	search(event) {
		console.log(this.state.searchTerm);
		event.preventDefault();
	}

	clearSearchField() {
		this.setState({
			searchTerm: ''
		})
		console.log(this.state.searchTerm);
	}

	render() {
		return (
			<nav>
		    <div className="nav-wrapper">
		      <form onSubmit={(event)=>{this.search(event)}}>
		        <div className="input-field">
		          <input 
		          	id="search" 
		          	type="search"
		          	value={this.state.searchTerm}
		          	placeholder="Sarch"
		          	onChange={(event)=>{
		          		this.updateSearchTerm(event)
		          	}} 
		          	required />
		          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
		          <i 
		          	className="material-icons" 
		          	onClick={()=>{
		          		this.clearSearchField()
		          	}}>close</i>
		        </div>
		      </form>
		    </div>
		  </nav>
		)
	}

}

export default SearchBar;
