import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Movies from './components/movies';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/customers" component={Customers} />
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
