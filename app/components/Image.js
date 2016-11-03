import React, { Component, PropTypes } from 'react';

class Image extends Component {

  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <div className="gallery-item" style={{
        backgroundImage    : `url(${this.props.url || ''})`,
      }}>
        <button onClick={this.props.onDelete} className="gallery-item__delete">X</button>
      </div>
    ); 
  }
};


Image.propTypes = {
  url      : PropTypes.string.isRequired,
  id       : PropTypes.number.isRequired,
  onDelete : PropTypes.func.isRequired
};

export default Image;