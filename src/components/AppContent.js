import React from 'react';
import ReactDOM from 'react-dom';

import Tasks from './Tasks';
import NewTask from './NewTask';

class AppContent extends React.Component {

	render() {
		return (
			<div className="">
				<NewTask />
				<Tasks />
			</div>
		);
	}
}

export default AppContent;