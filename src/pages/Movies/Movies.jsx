/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import { getMovieByName } from 'api/api';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import {
  GridList,
  GalleryCard,
  GalleryImg,
  CardImg,
  CardInfo,
  GridContainer,
  CardTitle,
  CardRate,
} from '../Home/Home.Styled';
import { Form, Input, Button } from './Movies.Styled';
import noPoster from '../../images/noimage.png';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchParams.has('query')) {
      setSearchQuery(searchParams.get('query'));
    }
    return () => {
      setMovies([]);
    };
  }, [searchParams]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    getMovieByName(searchQuery).then(res => {
      setMovies(res);
      setStatus(!status);
    });
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(inputValue);
    if (inputValue.trim() === '') {
      console.log('xyeta');
      setInputValue('');
      return;
    }

    if (searchParams === '') {
      setSearchParams({});
    }
    setSearchParams({ query: inputValue });
    setInputValue('');
  };
  console.log(location);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          placeholder="Search movie"
          type="text"
          onChange={handleChange}
        />
        <Button>Search</Button>
      </Form>
      {status && (
        <GridContainer>
          <GridList>
            {movies.map(({ title, id, poster_path, vote_average }) => (
              <GalleryCard key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                  }}
                  state={{ from: location }}
                >
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
      )}
    </>
  );
}
