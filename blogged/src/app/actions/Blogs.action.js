import {GET_BLOGS} from './Actions.type.js';

const action = (blogs)=>{
	console.log(blogs);
	return {
		type: GET_BLOGS,
		payload: blogs
	}
}

export const GetBlogsAction = action;