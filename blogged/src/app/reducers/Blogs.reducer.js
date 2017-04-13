import {GET_BLOGS} from './../actions/Actions.type.js';

const initialState = {
	fetchComplete: false,
	blogs: []
}

const store = (state = initialState, action)=>{
	switch(action.type) {
		case GET_BLOGS:
			return {
				fetchComplete: true,
				blogs: action.payload.data
			}
	}
	return state;
}

export const BlogsReducer = store;