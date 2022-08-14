// import { render } from '@testing-library/react';
import GalleryItem from './galleryItem';
import propTypes from 'prop-types';

const Gallery = ({ array, deleteMovie, toogleWatched, openModal }) => {
  return (
    <ul>
      {array.map(({ title, poster, vote, id, watched }) => {
        return (
          <GalleryItem
            id={id}
            title={title}
            poster={poster}
            vote={vote}
            key={id}
            watched={watched}
            deleteMovie={deleteMovie}
            toogleWatched={toogleWatched}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

export default Gallery;

Gallery.propTypes = {
  array: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      poster: propTypes.string.isRequired,
      vote: propTypes.number.isRequired,
      id: propTypes.number.isRequired,
      watched: propTypes.bool.isRequired,
    })
  ).isRequired,
};
