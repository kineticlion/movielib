import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listgroup";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _, { filter } from "lodash";
import Searchbox from "./searchbox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    searchQuery: "",
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie, movieCount) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    if (movieCount === 1)
      this.setState({ currentPage: this.state.currentPage - 1, movies });
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      sortColumn,
      selectedGenre,
      movies: allMovies,
      searchQuery,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: movieCount } = this.state.movies;

    const {
      currentPage,
      pageSize,
      genres,
      sortColumn,
      selectedGenre,
      searchQuery,
    } = this.state;

    const { totalCount, data: movies } = this.getPagedData();

    return movieCount === 0 ? (
      <p className="m-5">There are no movies in the database.</p>
    ) : (
      <div>
        <h2>Movies</h2>
        <div className="row m-5">
          <div className="col-3">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <p>There are {totalCount} movies in the database.</p>
            <Searchbox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
              sortColumn={sortColumn}
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
