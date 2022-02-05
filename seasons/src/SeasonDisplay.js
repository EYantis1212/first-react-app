import React from 'react';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const seasonMessage =
		season === 'summer' ? "Let's hit the beach!" : 'Brrr, it is chilly!';
	return (
		<div>
			<h1>{seasonMessage}</h1>
		</div>
	);
};

export default SeasonDisplay;
