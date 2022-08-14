import React, { Component } from 'react';
import { Button } from './button/button';
import data from '../data/data.json';
import { cleanedArray } from 'helpers/cleaningJson';
import Gallery from './gallery/gallery';
import { element } from 'prop-types';
import Modal from './modal/modal';

export class App extends Component {
  state = {
    isShown: false,
    movies: cleanedArray(data),
    currentImage: '',
  };

  toogleIsShown = () => {
    this.setState({ isShown: true });
  };

  deleteMovie = id => {
    this.setState(prevState => ({
      movies: prevState.movies.filter(element => element.id !== id),
    }));
  };

  toogleWatched = id => {
    this.setState(prevState => ({
      movies: prevState.movies.map(element => {
        if (element.id === id) {
          return { ...element, watched: !element.watched };
        }
        return element;
      }),
    }));
  };

  closeModal = () => {
    this.setState({ currentImage: '' });
  };

  openModal = image => {
    console.log(image);
    this.setState({ currentImage: image });
  };

  render() {
    const { isShown, movies, currentImage } = this.state;

    return (
      <div>
        {isShown ? (
          <Gallery
            array={movies}
            deleteMovie={this.deleteMovie}
            toogleWatched={this.toogleWatched}
            openModal={this.openModal}
          />
        ) : (
          <Button
            func={this.toogleIsShown}
            text="Show film list"
            type="button"
          />
        )}
        {currentImage && (
          <Modal image={currentImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
