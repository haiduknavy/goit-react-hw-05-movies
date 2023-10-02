import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'api/api';
import noPoster from '../../images/noimage.png';
import { CastList, ListItem } from './Cast.Styled';

function Cast() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const actorImg = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getCast(movieId).then(res => {
      setMovieData(res);
    });
  }, [movieId]);
  return (
    <>
      {
        <CastList>
          {movieData.map(({ id, profile_path, name, character }) => (
            <ListItem key={id}>
              <img
                src={profile_path ? `${actorImg}${profile_path}` : noPoster}
                alt={name}
                width="100"
              />
              <p>{name}</p>
              <p>
                Character: {character === '' ? 'Тo information' : character}
              </p>
            </ListItem>
          ))}
        </CastList>
      }
    </>
  );
}

export default Cast;
