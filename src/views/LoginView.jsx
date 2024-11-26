import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const LoginView = () => {
    return (
        <div>
            <Header />
            <form action="">
                <label htmlFor="">email</label>
                <input type="text" required />
                <label htmlFor="">password</label>
                <input type="text" required />
            </form>
            <Footer />
        </div>
    )
}

export default LoginView;