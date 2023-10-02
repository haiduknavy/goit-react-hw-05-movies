/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'api/api';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import {
  Wrapper,
  FirstTitle,
  Img,
  WrapperInfo,
  SecondTitle,
  ThirdTitle,
  LinkDetail,
  MovieInfo,
  ImgWrapper,
} from './MovieDetails.Styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getMovieById(movieId).then(res => {
      setMovieData(res.data);
      setStatus(true);
    });
  }, []);

  const location = useLocation();

  return (
    <>
      <GoBackBtn location={location} />
      {status && (
        <Wrapper>
          <ImgWrapper>
            <Img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
              width="300"
            />
            <WrapperInfo>
              <FirstTitle>
                {movieData.title} ({movieData.release_date.slice(0, 4)})
              </FirstTitle>
              <p>User score: {movieData.vote_average} %</p>
              <SecondTitle>Overview</SecondTitle>
              <p>{movieData.overview}</p>
              <ThirdTitle>Genres:</ThirdTitle>
              <p>{movieData.genres.map(({ name }) => name + ' ')}</p>
            </WrapperInfo>
          </ImgWrapper>
          <MovieInfo>
            <LinkDetail to="cast">Cast</LinkDetail>
            <LinkDetail to="reviews">Reviews</LinkDetail>
            <Outlet />
          </MovieInfo>
        </Wrapper>
      )}
    </>
  );
}

export default MovieDetails;
