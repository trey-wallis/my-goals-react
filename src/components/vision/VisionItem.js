import React, {Component} from 'react';

import '../../css/VisionItem.css';

import Scrollable from '../../components/Scrollable';
import RootStore from '../../store/RootStore';

class VisionItem extends Component {

	constructor(){
		super();
		const {ui, domain} = RootStore.store;
		this.ui = ui;
		this.domain = domain;
	}

	onCard = (id) => {
		this.domain.addVisionNoteForm.visionItemId = id;
		this.domain.addVisionNoteForm.response = "";
		this.domain.fetchNote();
	}

	render(){
		return(
			<div className="col-sm-6 col-lg-4 no-gutters">
				<div className="Vision__card card d-flex flex-column align-items-center border-0" onClick={() => {this.onCard(this.props.itemId)}}>
						<img className="Vision__img card-img-top" src={this.props.img} alt="img"/>
  					<div className="Vision__card-body card-body">
	    				<h6 className="text-center text-primary">{this.props.title}</h6>
	    				<p className="Vision__description text-black px-3">{this.props.desc}</p>
 	 				</div>
				</div>
			</div>);
	}
}

export default VisionItem;