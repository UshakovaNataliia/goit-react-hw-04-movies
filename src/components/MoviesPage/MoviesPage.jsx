import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import nophoto from '../../images.jpg';
import styles from './MoviesPage.module.css';

const MoviesPage = (props) => { 
  return (
     <ul className={styles.ul}>
      {props.movie.length > 0 &&
        props.movie.map(el => (
          <li key={el.id} className={styles.li}>
                <Link className={styles.a} to={{pathname: `/movies/${el.id}`, state: { from: props.location }}}>
                    <img className={styles.img}
                        src={
                            el.backdrop_path
                                ? `https://image.tmdb.org/t/p/w300/${el.backdrop_path}`
                                : nophoto
                        }
                        alt={el.title}/>
              {el.name || el.title}
                </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesPage.propTypes = {
  movie: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};

export default MoviesPage;


