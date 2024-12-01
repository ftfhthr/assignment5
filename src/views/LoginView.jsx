import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import "./LoginView.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const LoginView = () => {
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        if (pass == "iloveyou") {
            navigate("/movies");
        } else {
            alert("Wrong Password!");
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={(e) => { login(e) }}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={pass} onChange={(event) => { setPass( event.target.value ) }} required />
                <input type="submit" value={"Log In"} required />
            </form>
            <Footer />
        </div>
    )
}

export default LoginView;