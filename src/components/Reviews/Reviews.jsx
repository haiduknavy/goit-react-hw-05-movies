/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'api/api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId).then(res => setReviews(res));
  }, []);
  return (
    <>
      {reviews.length === 0 ? (
        'We don`t have any reviews for this movie.'
      ) : (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h5>Autor: {author}</h5>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
