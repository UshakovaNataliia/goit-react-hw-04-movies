import React, { Component } from 'react';
import queryString from 'query-string';
import MoviesPage from '../components/MoviesPage/MoviesPage';
import { searchMovie } from '../components/api';
import styles from './MoviesViews.module.css';

class MoviesView extends Component { 
  state = {
    input: '',
    movies: [],
  };

  async componentDidMount() {
    const {query} = queryString.parse(this.props.location.search);
    if (query) {
      const movie = await searchMovie(query);
      this.setState({ movies: movie.results });
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    const parseQuery = queryString.parse(this.props.location.search);
    const parseQueryPrev = queryString.parse(prevProps.location.search);
    if (parseQueryPrev.query !== parseQuery.query) {
      const movie = await searchMovie(parseQuery.query);
      this.setState({ movies: movie.results });
    }
  }
  handleInputChange = e => {
    this.setState({ input: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.input}`,
    });

    this.setState({ input: '' });
  };
  render () {
    return (
      <div className={styles.div}>
        <form onSubmit={this.handleSubmit}  className={styles.form}>
          <input className={styles.input} onChange={this.handleInputChange} type="text" value={this.state.input} placeholder="Film search"/>
          <button type="submit" className={styles.button}>Search</button>
        </form>
         {this.state.movies.length > 0 && (
          <MoviesPage
            movie={this.state.movies}
            location={`${this.props.location.pathname}${this.props.location.search}`}
          />
        )}
      </div>
    );
  }
};

export default MoviesView;
