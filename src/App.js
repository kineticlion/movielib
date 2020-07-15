import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Navbar from './components/navbar';
import MovieForm from './components/movieform';
import LoginForm from './components/loginform';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
