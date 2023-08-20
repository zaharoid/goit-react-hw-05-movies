import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as api from '../api/movies-api.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'components/Loader/Loader.jsx';
import { ReactComponent as StarIcon } from '../Icons/starIcon.svg';
import {
  MovieCard,
  GenresList,
  Genre,
  Overview,
  Rating,
} from 'components/MovieCard.styled.jsx';

function MovieDetails() {
  const { movieId } = useParams([]);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getMoviesById(id) {
      setLoading(true);
      try {
        const res = await api.getMovieById(id);
        setMovie(res.data);
      } catch (error) {
        toast.error('Something went wrong, try again.');
      } finally {
        setLoading(false);
      }
    }
    getMoviesById(movieId);
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      {!movie && loading && <Spinner />}
      {movie && (
        <div>
          <MovieCard>
            <div>
              <img
                src={
                  movie.poster_path &&
                  `http://image.tmdb.org/t/p/w300/${movie.poster_path}`
                }
                alt={movie.original_title}
              />
            </div>
            <div>
              <h1>{movie.original_title}</h1>
              <Rating>
                Rating: {movie.vote_average.toFixed(1)}{' '}
                <StarIcon width={17} fill="#cdf12d" stroke="black" />
              </Rating>
              <h2>Overview</h2>
              <Overview>{movie.overview}</Overview>
              <h3>Genres:</h3>
              <GenresList>
                {movie.genres?.map(({ name }) => (
                  <Genre key={name}>{name};</Genre>
                ))}
              </GenresList>
            </div>
          </MovieCard>
          <ul>
            <li>
              <Link to={'cast'}>cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default MovieDetails;
