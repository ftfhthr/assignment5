import { useState } from "react";
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";

const GenreView = () => {
    const [movieData, setMovieData] = useState([]);
    const [done, setDone] = useState(false);
    const params = useParams();

    async function getStuff() {
        const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.genre_id}&api_key=a05d4cdf7f59a8d24f88e67b04c3059c`);
        setMovieData(data.data.results);
        setDone(true);
    }

    useEffect(() => {
        getStuff();
        console.log(movieData);
    }, [done]);

    return (
        <div>
            <h1>genre</h1>
            {movieData.map((movie) => (
              <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />  
            ))}
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    )
}

export default GenreView;