import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api/movies-api';
import SearchForm from '../components/SearchForm/SearchForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'components/Loader/Loader';
import { Message } from 'components/InfoMessage/InfoMessage';

function Movies() {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const onTakeQuery = query => {
    setSearchParams({ query: query });
  };

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    api
      .getMovieByName(query)
      .then(({ data }) => {
        if (data.results.length === 0) {
          toast.warning("Unfortunately, we couldn't find anything.");
        }
        setMovies(data.results);
      })
      .finally(setLoading(false));
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={onTakeQuery} />
      {loading && <Spinner />}
      {movies ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Message />
      )}
      <ToastContainer />
    </>
  );
}

export default Movies;
