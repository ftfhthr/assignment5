import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

const RegisterView = () => {
    return (
        <div>
            <Header />
            <form action="">
                <label htmlFor="">first name</label>
                <input type="text" required />
                <label htmlFor="">last name</label>
                <input type="text" required />
                <label htmlFor="">email</label>
                <input type="text" required />
                <label htmlFor="">password</label>
                <input type="text" required />
                <label htmlFor="">reenter password</label>
                <input type="text" required />
            </form>
            <Footer />
        </div>
    )
}

export default RegisterView;