import background from "../assets/bkg.jpg";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <img src={background} alt="lots of movies" />
            <div class="hero-content">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Starts at $5.99. Cancel anytime.</p>
                <button class="subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Hero;