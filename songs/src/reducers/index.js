import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'No Scrubs',
			duration: '4:05',
		},
		{
			title: 'Birth in Reverse',
			duration: '3:15',
		},
		{
			title: 'Quinta Essentia',
			duration: '5:18',
		},
		{
			title: 'Purple Rain',
			duration: '8:41',
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
