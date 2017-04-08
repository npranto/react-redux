const store = (state = null, action)=>{
	switch (action.type){
		case 'BOOK_SELECTED': 
			return action.payload
	}
	return state;
}

export const ActiveBookReducer = store;