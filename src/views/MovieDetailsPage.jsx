import React, { Component } from 'react';
import Cast from '../components/MovieDetailsPage/Cast';
import Reviews from '../components/MovieDetailsPage/Reviews';
import nophoto from '../images.jpg';
import { Route, Link } from 'react-router-dom';
import { movieDetails } from '../components/api';

const styles = {
  status: { display: 'flex', marginRight: 20 },
  button:   {backgroundColor: 'rgb(237, 243, 180)',
    borderRadius: 10
  },
  link: {backgroundColor: 'rgb(237, 243, 180)',
    borderRadius: 10, margin: '20px', listStyle: 'none',
    textDecoration: 'none', padding: 10, textAlign: 'center',
    color: 'black'
  },
};

class MovieDetailsPage extends Component { 
  state = {
    movie: {},
    queryHistiory: null,
    error: null,
  };
  async componentDidMount() {
   const movie = await movieDetails(
     this.props.match.params.movieId,
   );
    this.setState({
      movie, queryHistiory: this.props.location.state
    });
  };
  handleGoBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    if (this.state.queryHistiory) {
      history.push(this.state.queryHistiory);
    }
    if (state) {
      history.push(state.from);
    } else {
      history.push('/');
    }
  };
  render() {
    const {
      original_title,
      vote_average,
      genres,
      release_date,
      overview,
      poster_path,
    } = this.state.movie;
    const year = Number.parseInt(release_date);
    return (
      <div>
            <br/>
        <button onClick={this.handleGoBack} type="button" style={styles.button}>Go back</button>
        <br />
        <br/>
        <div style={styles.status}>
           {this.state.error && <h1>Somethithg Wrong Try Again</h1>}
           <div style={styles.status}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}` || nophoto} alt={`${original_title}`} width={300} />                
            </div>
            <div>
                <h1>{original_title} ({year})</h1>
                <p>{vote_average && `User score: ${vote_average*10}%`}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres: </h3>
                <p>{genres &&
                genres.map((el, i, array) => {
                  if (i !== array.length - 1) {
                    return el.name + ', ';
                  }
                  return el.name + '.';
                })}</p>
        </div>
           </div>
        <p>Additional information</p>
            <ul style={styles.status}>
          <li style={styles.link}>
            <Link style={styles.link} to={{
                pathname: `${this.props.match.url}/cast`,
                state: { from: this.state.queryHistiory },
            }}>Cast</Link>
          </li> 
          <li style={styles.link}>
            <Link style={styles.link} to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { from: this.state.queryHistiory },
            }}>Rewies</Link>
          </li>
            </ul>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </div>
    );
  }
};

export default MovieDetailsPage;
