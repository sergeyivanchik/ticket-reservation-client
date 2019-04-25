import React from 'react';

import './MoviesPanel.scss';


class MoviesPanel extends React.Component {
  render() {
    return (
      <div className="movies-panel">
        <label>Add movie</label>
        <input
          type="text"
          placeholder="movie title"
          name="name"
        />
        <label>Poster</label>
        <input
          type="text"
          placeholder="poster"
          name="poster"
        />
        <label>Descriprion</label>
        <textarea
          rows="10"
          cols="68"
          name="description"
          className="movies-panel__description"
        />
        <input type="submit" value="Add cinema"/>
      </div>
    )
  }
}

export default MoviesPanel;
