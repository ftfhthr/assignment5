import logo from "../assets/321.png";

const Header = () => {
    return (
        <div>
            <img src={logo} alt="321 Movies Logo" />
            <div className="navbar-container">
            <a href="">Log In</a>
            <a href="">Sign Up</a>
            </div>
        </div>
    );
}

export default Header;