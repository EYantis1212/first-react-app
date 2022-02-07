import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front-end JavaScript Framework',
	},
	{
		title: 'Why use React?',
		content: 'Favorite JS Library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];
export default () => {
	return (
		<div>
			<Search />
		</div>
	);
};
