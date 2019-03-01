import React, {Component} from 'react';
import DocumentIcon from '../icons/document-new.svg'
import GraphicIcon from '../icons/graph-bar.svg';
import HeartIcon from '../icons/heart.svg';

import '../css/Title.css';

class Title extends Component {


	render(){
		return(
			<React.Fragment>
				<div className="Title__top bg-primary d-flex align-items-center justify-content-center">
					<div className="jumbotron bg--inherit m4 d-flex flex-column align-items-center">
						<h1 className="display-4 text-center text-white">What are my goals?</h1>
						<p className="lead w-50 text-tertiary">Meet the dynamic way and responsive way to expand your vision and track your SMART goals</p>
					</div>
				</div>
				<div className="Title__bottom row no-gutters align-items-center bg-white">
					<div className="col-sm-4 d-flex flex-column align-items-center">
						<img src={DocumentIcon} className="mb-2 icon--small" alt="new document"/>
						<h6 className="text-dark">Vision Board</h6>
						<p className="w-50 text-center text-dark">Create a visual representation of your ideas and aspirations</p>
					</div>
					<div className="col-sm-4 d-flex flex-column align-items-center">
						<img src={GraphicIcon} alt="graph bar" className="mb-2 icon--small"/>
						<h6 className="text-dark">Goals</h6>
						<p className="w-50 text-center text-dark">Create and actively track your SMART goals. Create subgoals
						and tasks to help manage your progress</p>
					</div>
					<div className="col-sm-4 d-flex flex-column align-items-center">
						<img src={HeartIcon} alt="heart" className="mb-2 icon--small"/>
						<h6 className="text-dark">Habits</h6>
						<p className="w-50 text-center text-dark">Track and develop healthy habits that will help you achieve your goals</p>
					</div>
				</div>
			</React.Fragment>);
	}
}

export default Title;