import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import movie1 from "../assets/movie1.jpg"
import movie2 from "../assets/movie2.jpg"
import movie3 from "../assets/movie3.jpg"
import "./Feature.css"

const Feature = () => {
    const [movieData, setMovieData] = useState([]);

    async function getStuff() {
        const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDVkNGNkZjdmNTlhOGQyNGY4OGU2N2IwNGMzMDU5YyIsIm5iZiI6MTczMjA0MTEwNy4wOTIwODg1LCJzdWIiOiI2NzNjYmI5MmU3NzJjY2MxNTY0NTNiOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mn_6h6j8NSLw1cZ4BQFC0BkWlsMJY1fza_EUAyuysaE"
                }
            }
        )
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error(error));
        return data;
    };

    useEffect(() => {
    //     setMovieData((async () => {
    //         const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    //             {
    //                 headers: {
    //                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDVkNGNkZjdmNTlhOGQyNGY4OGU2N2IwNGMzMDU5YyIsIm5iZiI6MTczMjA0MTEwNy4wOTIwODg1LCJzdWIiOiI2NzNjYmI5MmU3NzJjY2MxNTY0NTNiOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mn_6h6j8NSLw1cZ4BQFC0BkWlsMJY1fza_EUAyuysaE"
    //                 }
    //             }
    //         )
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(error => console.error(error));
    //         return data;
    //     })());
        console.log(getStuff());
    }, []);

    return (
        <div className="feature">
            <h2>Top 3 Movies</h2>
            <div className="movies">
                <img src={`https://image.tmdb.org/t/p/w500${getStuff().data.results[0].poster_path}`} alt="Hitman movie cover" />
                <img src={movie2} alt="Jailbreak Love on the Run movie cover" />
                <img src={movie3} alt="Gifted movie cover" />
            </div>
        </div>
    )
}

export default Feature;