import { useEffect, useState } from 'react';
import * as api from '../api/movies-api';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from './Loader/Loader';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [infoMessage, setInfoMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getMovieReviews(movieId)
      .then(({ data }) => {
        if (data.results.length === 0) {
          setInfoMessage(true);
          return;
        }
        setReviews(data.results);
      })
      .catch(err => toast.error('Something went wrong, try again.'))
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <div>
      {loading && <Spinner />}
      {infoMessage ? (
        <p>There is no review for this movie :( </p>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>{' '}
              <p>
                <strong>Author's words:</strong> {content}
              </p>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}

export default Reviews;
