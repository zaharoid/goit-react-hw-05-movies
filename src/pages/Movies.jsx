import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api/movies-api';
import SearchForm from '../components/SearchForm/SearchForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'components/Loader/Loader';
import { Message } from 'components/InfoMessage/InfoMessage';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const onTakeQuery = query => {
    setQuery(query);
  };

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
      .catch(err => toast.err('Something went wrong, try again ('))
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
              <Link to={`${movie.id}`}>{movie.title}</Link>
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
