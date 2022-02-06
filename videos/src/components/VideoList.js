import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
	const renederedList = videos.map((video) => {
		return <VideoItem video={video} />;
	});
	return <div>{renederedList}</div>;
};

export default VideoList;
