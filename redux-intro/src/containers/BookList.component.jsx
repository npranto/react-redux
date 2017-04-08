import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';
import {bookSelectedAction} from './../actions/index';

class BookList extends Component {
	
	constructor(props) {
		super(props);
	}

	renderBooks() {
		return this.props.books.map((book)=>{
			return (
				<a 
					onClick={()=>{this.props.bookSelected(book)}}
					key={book.title} 
					className="list-group-item"> 
					{book.title} 
				</a>
			)
		})
	}

	render() {
		return (
			<ul className="list-group"> 
				{this.renderBooks()}
			</ul>
		)
	}

}

const mapStateToProps = (state)=>{
	// the 'books' propery refers to 'this.props.books' inside BookList component
	return {
		books: state.books
	}
}

const mapDispatchToProps = (dispatch)=>{
	// the 'selectedBook' property refers to 'this.props.books' inside BookList component
	// whenever 'selectedBook' is called, the result should be passed to all the reducers
	return bindActionCreators({
		bookSelected: bookSelectedAction
	}, dispatch);
}

// promotes BookList component to a redux Container, so data can be accessed inside the component from different reducers
export default connect(mapStateToProps, mapDispatchToProps)(BookList);



