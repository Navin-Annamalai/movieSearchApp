import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getMovieDetails } from "../API/omdbservice";

function MovieDetails() {
    const { imdbID } = useParams();
    console.log('Movie ID:', imdbID);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                console.log('Fetching movie details for:', imdbID);
                const data = await getMovieDetails(imdbID);
                if (data.Response === 'True') {
                    setMovie(data);
                    setError('');
                } else {
                    setMovie(null);
                    setError(data.Error);
                }
            } catch {
                setError('An error occurred while fetching movie details.');
            }
        }

        fetchMovie();
    }, [imdbID]);

    if (error) return <p className="p-4 text-red-500">{error}</p>
    if (!movie) return <p className="p-4">Loading...</p>;
    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                alt={movie.Title} className="w-full max-w-sm mb-4 rounded" />
            <p className="mb-2">Year: {movie.Year}</p>
            <p className="mb-2">Type: {movie.Type}</p>
            <p className="mb-2">IMDb Rating: {movie.imdbRating}</p>
            <p className="mb-2">IMDb Votes: {movie.imdbVotes}</p>
            <p className="mb-2">Runtime: {movie.Runtime}</p>
            <p className="mb-2">Genre: {movie.Genre}</p>
            <p className="mb-2">Director: {movie.Director}</p>
            <p className="mb-2">Writer: {movie.Writer}</p>
            <p className="mb-2">Actors: {movie.Actors}</p>
            <p className="mb-2">Plot: {movie.Plot}</p>
            <p className="mb-2">Language: {movie.Language}</p>
            <p className="mb-2">Country: {movie.Country}</p>
            <p className="mb-2">Awards: {movie.Awards}</p>

        </div>
    )
}

export default MovieDetails