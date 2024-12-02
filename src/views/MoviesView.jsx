import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Genres from "../components/Genres.jsx"
import { Outlet } from "react-router-dom";

const MoviesView = () => {
    const genresList = [
        {
            genre: "Action",
            id: 28
        },
        {
            genre: "Family",
            id: 10751
        },
        {
            genre: "Science Fiction",
            id: 878
        },
        {
            genre: "Adventure",
            id: 12
        },
        {
            genre: "Fantasy",
            id: 14
        },
        {
            genre: "TV Movie",
            id: 10770
        },
        {
            genre: "Animation",
            id: 16
        },
        {
            genre: "History",
            id: 36
        },
        {
            genre: "Thriller",
            id: 53
        },
        {
            genre: "Comedy",
            id: 35
        }
    ]

    return (
        <div>
            <Header />
            <Genres genresList={genresList}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MoviesView;