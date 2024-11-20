import logo from "../assets/321.png";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="321 Movies Logo" />
            <div className="navbar-container">
                <a href="">Log In</a>
                <a href="">Sign Up</a>
            </div>
        </div>
    );
}

export default Header;