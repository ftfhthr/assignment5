import movie1 from "../assets/movie1.jpg"
import movie2 from "../assets/movie2.jpg"
import movie3 from "../assets/movie3.jpg"

const Feature = () => {
    return (
        <div>
            <h2>Top 3 Movies</h2>
            <div class="movies">
                <img src={movie1} alt="Hitman movie cover" />
                <img src={movie2} alt="Jailbreak Love on the Run movie cover" />
                <img src={movie3} alt="Gifted movie cover" />
            </div>
        </div>
    )
}

export default Feature;