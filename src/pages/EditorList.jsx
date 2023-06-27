import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './EditorList.module.css';

const EditorList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {films.map(film => (
        <li key={film.id} className={css.link}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
