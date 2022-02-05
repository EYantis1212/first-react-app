// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Jamie"
					timeAgo="Today at 4:45PM"
					avatar={faker.image.avatar()}
					commentText={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Rebecca"
					timeAgo="Yesterday at 2:15PM"
					avatar={faker.image.avatar()}
					commentText={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Eric"
					timeAgo="3 days ago at 1:23AM"
					avatar={faker.image.avatar()}
					commentText={faker.lorem.sentence()}
				/>
			</ApprovalCard>
		</div>
	);
};

// Take react component and show on screen
ReactDOM.render(<App />, document.querySelector('#root'));
