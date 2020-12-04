import React, { Component, Suspense, lazy } from 'react';
// import Axios from 'axios';
import {Route, Switch} from 'react-router-dom'
import NotFound from '../../views/NotFound';
import NavigationView from '../../views/NavigationView';
import Loader from 'react-loader-spinner'

const HomePage = lazy(() =>
  import('../HomePage/HomePage' /* webpackChunkName: "home-view" */),
);
const MoviesView = lazy(() =>
  import('../../views/MoviesView' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPage = lazy(() =>
  import('../../views/MovieDetailsPage' /* webpackChunkName: "detailsMovie-view" */),
);

class App extends Component { 
  render () {

    return (
      <div>
        <NavigationView />
        <Suspense fallback={
          <Loader
            type="Circles"
            color="rgb(178, 196, 24)"
            height={50}
            width={50}
          />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesView} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
