const Genres = (props) => {
    console.log(props.genresList);
    return (
        <div>
            {props.genresList.map((genre) => (
                <a href={`/movies/genre/${genre.id}`}>{genre.genre}</a>
            ))}
        </div>
    )
}

export default Genres;