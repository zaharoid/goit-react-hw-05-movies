import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import * as api from '../api/movies-api';
import { Filter } from 'components/Filter/Filter';
import { MoviesList } from 'components/MoviesList.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, EffectCoverflow } from 'swiper/modules';

function Home() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('movie') ?? '';

  const filteredMovies = movies.filter(({ title }) =>
    title.toLowerCase().includes(movieQuery.toLowerCase())
  );

  useEffect(() => {
    async function getTrend() {
      try {
        const movies = await api.getTrending();
        setMovies(movies);
      } catch (error) {
        toast.error('Something went wrong, try again.');
      }
    }
    getTrend();
  }, []);
  return (
    <>
      <Filter setParams={setSearchParams} query={movieQuery} />
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
        }}
        speed="500"
        loop="true"
        modules={[Autoplay, Keyboard, EffectCoverflow]}
      >
        {filteredMovies.map(movie => (
          <SwiperSlide key={movie.id} zoom={true}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <ToastContainer />
    </>
  );
}

export default Home;
