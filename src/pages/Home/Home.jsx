import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'api/api';
import {
  GridList,
  GalleryCard,
  GalleryImg,
  CardImg,
  CardInfo,
  GridContainer,
  CardTitle,
  CardRate,
} from './Home.Styled';
import noPoster from '../../images/noimage.png';

export default function Home() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(res => setResponse(res));
  }, []);
  return (
    <GridContainer>
      <h2>Trending today</h2>
      <GridList>
        {response.map(({ title, id, poster_path, vote_average }) => (
          <GalleryCard key={id}>
            <Link to={`/movies/${id}`}>
              {' '}
              <GalleryImg>
                <CardImg
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : noPoster
                  }
                />
              </GalleryImg>
              <CardInfo>
                <CardTitle>{title}</CardTitle>
                <CardRate>{vote_average}</CardRate>
              </CardInfo>
            </Link>
          </GalleryCard>
        ))}
      </GridList>
    </GridContainer>
  );
}
