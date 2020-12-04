import React, { Component } from 'react';

import {movieCast} from '../api';
import styles from './Cast.module.css';

export class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const cast = await movieCast(
      Number(this.props.match.params.movieId),
    );
    this.setState({ cast: cast.cast });
  }

  render() {
    return (
    <ul className={styles.ul}>
        {this.state.cast.length > 0 &&
          this.state.cast.map(el => {
            if (el.profile_path) {
              return (
                <li key={el.cast_id} className={styles.link}>
                  <p> {el.name}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
                    alt={el.name}
                    width='150'
                  />
                </li>
              );
            }
            return null;
          })}
      </ul>
    );
  }
}

export default Cast;