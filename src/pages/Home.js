import React, { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrending();
  }, []);
  return (
    <main>
      <h1>Trending Today</h1>

      {loading && <Loader />}
    </main>
  );
};
export default Home;
