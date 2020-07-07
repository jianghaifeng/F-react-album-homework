import React, { Component } from 'react';
import { fetchPhotos } from '../apiUtil';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoes: [],
    };
  }

  componentDidMount() {
    console.log('child componentDidMount');
    fetchPhotos(this.props.albumId).then((photoes) => {
      this.setState({
        photoes,
      });
    });
  }

  componentDidUpdate() {
    console.log('child componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentDidUnmount');
  }

  render() {
    const { photoes } = this.state;
    return (
      <div className="child">
        {photoes.slice(0, 3).map((photo) => (
          <div className="photo" key={photo.id}>
            <img src={photo.url} width="160px" height="160px" alt="" />
            <p className="photoTitle">{photo.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Child;
