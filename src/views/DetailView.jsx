import axios from "axios";
import { useEffect, useState } from "react";

const DetailView = () => {
	const [movieData, setMovieData] = useState({});
	const [videos, setVideos] = useState([])
	const [done, setDone] = useState(false);

	const getStuff = async () => {
		const data = await axios.get(`https://api.themoviedb.org/3/movie/912649?language=en-US&api_key=a05d4cdf7f59a8d24f88e67b04c3059c`)
		const trailerData = await axios.get(`https://api.themoviedb.org/3/movie/912649/videos?language=en-US&api_key=a05d4cdf7f59a8d24f88e67b04c3059c`)
		setMovieData(data.data);
		setVideos(trailerData.data.results);
		setDone(true);
	}

	useEffect(() => {
		getStuff();
	}, [done])

	return (
		<div>
			<h1>detail view</h1>
		</div>
	)
}

export default DetailView;