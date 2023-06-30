import { useState } from 'react';

const MovieSearchForm = ({ searchMovie, searchQuery }) => {
  const [query, setQuery] = useState(searchQuery);

  const handleSubmit = event => {
    event.preventDefault();
    searchMovie(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchMovie"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearchForm;
