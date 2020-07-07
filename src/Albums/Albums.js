import React, { Component } from 'react';
import './Albums.scss';
import { fetchAlbums } from '../apiUtil';
import Child from './Child';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlbumId: 1,
      albums: [],
    };
  }

  componentDidMount() {
    fetchAlbums().then((albums) => {
      this.setState({
        albums,
      });
    });
  }

  mountChild = (id) => this.setState({ currentAlbumId: id });

  render() {
    const { currentAlbumId, albums } = this.state;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" key={album.id}>
            <p className="title" onClick={this.mountChild.bind(this, album.id)}>
              {album.title}
            </p>
            {currentAlbumId === album.id ? <Child albumId={album.id} /> : null}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
