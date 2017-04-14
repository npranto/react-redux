import React, {Component} from 'react';
import './CreateNewBlog.component.css';

class CreateNewBlog extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	newBlog: {
		// 		title: '',
		// 		categories: [],
		// 		content: ''
		// 	}
		// }

		// this.onTitleInputChange = this.onTitleInputChange.bind(this);
		// this.onContentInputChange = this.onContentInputChange.bind(this);
		// this.onNewCategoryAdded = this.onNewCategoryAdded.bind(this);
		// this.createNewBlog = this.createNewBlog.bind(this);
		// this.runMaterializeChipMethods = this.runMaterializeChipMethods.bind(this);
		
		this.runMaterializeChipMethods();
	}

	runMaterializeChipMethods() {
		const _this = this;
		$(document).ready(function(){
			$('.chips').material_chip();
			$('.chips').on('chip.add', function(e, chip){
			    // you have the added chip here
			    // _this.onNewCategoryAdded(chip.tag);
			});
		});
	}

	// onTitleInputChange(event) {
	// 	this.setState({
	// 		newBlog: {
	// 			title: event.target.value
	// 		}
	// 	})
	// }

	// onContentInputChange(event) {
	// 	this.setState({
	// 		newBlog: {
	// 			content: event.target.value
	// 		}
	// 	})
	// }

	// onNewCategoryAdded(tag){
	// 	this.setState({
	// 		newBlog: {
	// 			content: 'hello'
	// 		}
	// 	})
	// }

	createNewBlog() {
		console.log(this.state);
	}

	render() {
		return (
			<div className="create-new-blog-component col s12 m12 l12">
				<form className="col s12 m12 l12" onSubmit={this.createNewBlog}>
					<ul className="collection with-header">
				        <li className="collection-header light-blue darken-1 white-text center"><h4> Create New Blog </h4></li>
				        <li className="collection-item">
						      <div className="row">
						      	<div className="input-field col s12 m6 l6">
						          <i className="material-icons prefix">call_made</i>
						          <input 
						          	id="icon_prefix" 
						          	type="text" 
						          	className="validate"
						          	value={this.state.newBlog.title}
						          	required 
						          	onChange={(event)=>{this.onTitleInputChange(event)}} />
						          <label htmlFor="icon_prefix"> Title </label>
						        </div>
						      </div>
						      <div className="row">
								<div className="input-field col s12 m6 l6">
						          <i className="material-icons prefix">label_outline</i>
						          <div className="chips"></div>
						          <label htmlFor="icon_prefix"> Categories </label>
						        </div>
						      </div>
						      <div className="row">
						        <div className="input-field col s12 m12 l12">
						          <i className="material-icons prefix">mode_edit</i>
						          <textarea 
						          	id="icon_prefix2" 
						          	className="materialize-textarea"
						          	value={this.state.newBlog.content} 
						          	required
						          	onChange={(event)=>{this.onContentInputChange(event)}}></textarea>
						          <label htmlFor="icon_prefix2"> Content </label>
						        </div>
						      </div>
				        </li>
				        <a onClick={this.createNewBlog} className="waves-effect waves-light btn-large green darken-1 white-text center"> Create </a>
			        </ul>
			    </form>  
	        </div>
		)
	}
}

export default CreateNewBlog;