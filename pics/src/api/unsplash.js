import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID RaSRcScc-NUcoxrZvpcki7TkIYWp99n-h3Ocw8bFgtU',
	},
});
