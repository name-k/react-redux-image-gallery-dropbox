import React, { Component, PropTypes } from 'react';

class Image extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.link) {
      this.props.getImageLink(this.props.path_display);
    }
  }

  handleDelete() {
    const { onDelete, path_display } = this.props;
    onDelete(path_display);
  }

  render() {
    return (
      <div className="gallery-item" style={{
        backgroundImage    : `url(${this.props.link || ''})`,
      }}>
        <button onClick={this.handleDelete.bind(this)} className="gallery-item__delete">D</button>
      </div>
    ); 
  }
};


Image.propTypes = {
  link           : PropTypes.string,
  path_display   : PropTypes.string.isRequired,
  id             : PropTypes.string.isRequired,
  onDelete       : PropTypes.func.isRequired,
  getImageLink   : PropTypes.func.isRequired
};

export default Image;