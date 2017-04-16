import React, {Component} from 'react';
import './CreateNewBlogForm.component.css';

class CreateNewBlogForm extends Component {
	constructor(props) {
		super(props);

		this.runMaterializeChipMethods();
	}

	runMaterializeChipMethods() {
		const _this = this;
		$(document).ready(function(){
			$('.chips').material_chip();
			$('.chips').on('chip.add', function(e, chip){
			    // you have the added chip here
			});
		});
	}

	render() {
		return (
			<div className="create-new-blog-form-component col s12 m12 l12">
				<form className="col s12 m12 l12">
					<ul className="collection with-header">
				        <li className="collection-header light-blue darken-1 white-text center"><h4> Create New Blog </h4></li>
				        <li className="collection-item">
						      <div className="row">
						      	<div className="input-field col s12 m6 l6">
						          <i className="material-icons prefix">call_made</i>
						          <textarea 
						          	id="icon_prefix2" 
						          	className="materialize-textarea title"
						          	required>
						          </textarea>
						          <label htmlFor="icon_prefix"> Title </label>
						        </div>
						      </div>
						      <div className="row">
								<div className="input-field col s12 m6 l6">
						          <i className="material-icons prefix">label_outline</i>
						          <div className="chips categories"></div>
						          <label htmlFor="icon_prefix"> Categories </label>
						        </div>
						      </div>
						      <div className="row">
						        <div className="input-field col s12 m12 l12">
						          <i className="material-icons prefix">mode_edit</i>
						          <textarea 
						          	id="icon_prefix2" 
						          	className="materialize-textarea content"
						          	required>
						          </textarea>
						          <label htmlFor="icon_prefix2"> Content </label>
						        </div>
						      </div>
				        </li>
				        <a type="submit" className="waves-effect waves-light btn-large green darken-1 white-text center"> Create </a>
			        </ul>
			    </form>  
	        </div>
		)
	}
}

export default CreateNewBlogForm;

