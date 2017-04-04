import React, {Component} from 'react';

class SearchBar extends Component{
	
	constructor(){
		super();

		// NOTE: to manipulate state outside of constructor, use this.setState()...
		this.state = {
			searchTerm: ''
		}
	}

	// runs whenever the search bar input changes
	onSearchBarInputChange(event){
		let copyOfState = this.state;
		copyOfState.searchTerm = event.target.value;
		this.setState(copyOfState);
		console.log(this.state.searchTerm);
	}

	render(){
		return (
			<div className="search-bar-component">
				<input 
					type="text"
					value={this.state.searchTerm} 
					placeholder="Search" 
					onChange={this.onSearchBarInputChange.bind(this)} />	
			</div>
		)
	}

}

export default SearchBar;









