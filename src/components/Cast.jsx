import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../api/movies-api';
import { Spinner } from './Loader/Loader';

function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getMovieCast(movieId)
      .then(({ data }) => setCast(data.cast))
      .catch(err => console.log(err))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Spinner />}
      {cast && (
        <ul>
          {cast.map(({ character, name, profile_path, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w300/${profile_path}`
                }
                alt="Actor"
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
