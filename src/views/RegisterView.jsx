import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const RegisterView = () => {
    return (
        <div>
            <Header />
            <div className="form-container">
                <form action="">
                    <label htmlFor="">first name</label>
                    <input type="text" required />
                    <label htmlFor="">last name</label>
                    <input type="text" required />
                    <label htmlFor="">email</label>
                    <input type="email" required />
                    <label htmlFor="">password</label>
                    <input type="password" required />
                    <label htmlFor="">reenter password</label>
                    <input type="password" required />
                    <input type="submit" value={"Sign Up"} required />
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterView;