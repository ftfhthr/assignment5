import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Genres from "../components/Genres.jsx"
import { Outlet } from "react-router-dom";

const MoviesView = () => {
    return (
        <div>
            <Header />
            <Genres />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MoviesView;