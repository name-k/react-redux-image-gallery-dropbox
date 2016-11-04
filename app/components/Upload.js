import React, { Component, PropTypes } from 'react';

class Upload extends Component {

  constructor(props) {
    super(props);
  }

  handleAdd(e) {
    const files = e.target.files;

    if(!files || !files[0]) return;

    this.props.onSubmit(files[0]);
  }

  render() {
    return (
      <label htmlFor="upload-action" className="gallery-upload">
        <input 
          name={new Date().getTime()}
          onChange={this.handleAdd.bind(this)} 
          id="upload-action" type="file" 
          className="gallery-upload__input" />
        <label htmlFor="upload-action" className="gallery-upload__action">
          Drag & Drop here
        </label>
      </label>
    ); 
  }
};


Upload.propTypes = {
  onSubmit : PropTypes.func.isRequired
};

export default Upload;