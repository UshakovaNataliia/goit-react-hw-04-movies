import React, { Component } from 'react';
import MoviesPage from '../MoviesPage/MoviesPage';
import { popularMovies } from '../api.js';

// const styles = {
//   status: { width: '100px' },
// };

class HomePage extends Component { 
  state = {
    movies: [],
  };
  async componentDidMount() {
    const axiosMovies = await popularMovies();
    this.setState({ movies: axiosMovies });
  };
  render () {
    return (
        <MoviesPage movie={this.state.movies}
          location={this.props.location.pathname}/>
    );
  }
};

export default HomePage;


