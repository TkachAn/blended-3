import propTypes from 'prop-types';

const GalleryItem = ({
  title,
  id,
  poster,
  vote,
  watched,
  deleteMovie,
  toogleWatched,
  openModal,
}) => {
  return (
    <li id={id}>
      <h2>{title}</h2>
      <p>Votes: {vote}</p>
      <p>
        Watched:{' '}
        <span onClick={() => toogleWatched(id)}>{watched.toString()}</span>
      </p>
      <button type="button" onClick={() => deleteMovie(id)}>
        Delete
      </button>
      <button type="button" onClick={() => openModal(poster)}>
        Show poster
      </button>
    </li>
  );
};

export default GalleryItem;

GalleryItem.prototype = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  vote: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  watched: propTypes.bool.isRequired,
};
