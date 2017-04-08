import { combineReducers } from 'redux';
import {BooksReducer} from './Books.reducer.js'
import {ActiveBookReducer} from './ActiveBook.reducer.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
