const bookSelected = (book)=>{
	// bookSelected is an ActionCreator, which returns an object with action 'type' property
	// all ActionCreators must return 'type' property and an optional 'payload' property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}

export default bookSelected;