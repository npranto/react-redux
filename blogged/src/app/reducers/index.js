import { combineReducers } from 'redux';
import {BlogsReducer} from './Blogs.reducer.js';

const rootReducer = combineReducers({
	blogs: BlogsReducer
});

export default rootReducer;
