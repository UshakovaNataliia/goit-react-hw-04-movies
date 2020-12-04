import React, { Component } from 'react';
import {movieReviews} from '../api';
import styles from './Reviews.module.css';

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const reviews = await movieReviews(
      Number(this.props.match.params.movieId),
    );
    this.setState({ reviews: reviews.results });
  }

  render() {
    return (
      <ul className={styles.ul}>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(el => {
            return (
              <li key={el.id} className={styles.link}>
                <h2> {el.author}</h2>{' '}
                <span>{el.content}</span>
              </li>
            );
          })
        ) : (
          <p>No Reviews</p>
        )}
      </ul>
    );
  }
}

export default Reviews;