import HomeView from "./views/HomeView.jsx"
import LoginView from "./views/LoginView.jsx"
import RegisterView from "./views/RegisterView.jsx"
import MoviesView from "./views/MoviesView.jsx"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GenreView from "./views/GenreView.jsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/login" element={<LoginView />} />
				<Route path="/register" element={<RegisterView />} />
				<Route path="/movies" element={<MoviesView />}>
					<Route path="genre/:id" element={<GenreView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
