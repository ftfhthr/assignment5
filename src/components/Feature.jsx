import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./Feature.css"

const Feature = () => {
    const [movieData, setMovieData] = useState([]);
    const [movie1, setMovie1] = useState({});
    const [movie2, setMovie2] = useState({});
    const [movie3, setMovie3] = useState({});
    const [done, setDone] = useState(false);

    async function getStuff() {
        const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDVkNGNkZjdmNTlhOGQyNGY4OGU2N2IwNGMzMDU5YyIsIm5iZiI6MTczMjA0MTEwNy4wOTIwODg1LCJzdWIiOiI2NzNjYmI5MmU3NzJjY2MxNTY0NTNiOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mn_6h6j8NSLw1cZ4BQFC0BkWlsMJY1fza_EUAyuysaE"
                }
            }
        )
        setMovieData(data.data.results);
        setMovie1(movieData[Math.floor(Math.random() * movieData.length)]);
        setMovie2(movieData[Math.floor(Math.random() * movieData.length)]);
        setMovie3(movieData[Math.floor(Math.random() * movieData.length)]);
        setDone(true);
        return data;
    };
    
    useEffect(() => {
        getStuff();
    }, [done]);


    return (
        <div className="feature">
            <h2>Top 3 Movies</h2>
                {done === false ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="movies">
                        <img src={`https://image.tmdb.org/t/p/w500${movie1?.poster_path}`} alt="Hitman movie cover" />
                        <img src={`https://image.tmdb.org/t/p/w500${movie2?.poster_path}`} alt="Hitman movie cover" />
                        <img src={`https://image.tmdb.org/t/p/w500${movie3?.poster_path}`} alt="Hitman movie cover" />
                    </div>
                )}
        </div>
    )
}

export default Feature;