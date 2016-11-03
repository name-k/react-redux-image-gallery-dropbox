import React, { Component, PropTypes } from 'react';
import { fetchImages, addImage, deleteImage, fetchCategories, setCategory } from 'actions/general-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classnames from 'classnames';

import Image from 'components/Image';
import Upload from 'components/Upload';


class Gallery extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchCategories();
  }

  handleImageDelete(id) {
    this.props.deleteImage(id);
  }

  handleImageSubmit(file) {
    this.props.addImage(file);
  }

  renderImages() {
    const { images, categories } = this.props;

    if(images) {
      return (image.map((image, index) => {
        return (
          <Image 
            onDelete={ this.handleImageDelete } 
            url={ image.base64 } 
            id={ image.id } />
        )
      }))  
    }

    return null;
  }

  
  renderNavigationItems() {
    const { categories, images } = this.props;
    if(!categories) return null;

    return (categories.map(cat => {
      // TODO: here should find saved images for current category
      return (
        <button 
          key={cat.id} 
          className={classnames({ 'is-active' : cat.active })}
          onClick={() => { this.props.setCategory(cat.id) }}>{cat.name} (0)</button>
      );
    }));

  }



  render() {
    return (
      <div className="gallery">
      
        <div className="gallery__navigation">
          { this.renderNavigationItems() }
        </div>

        <div className="gallery__body">

          <div className="gallery__images">
            { /*this.renderImages()*/ }
          </div>

          <div className="gallery__upload">
            <Upload onSubmit={this.handleImageSubmit.bind(this)} />
          </div>
        </div>


        

      </div>
    );
  }
}

Gallery.propTypes = {
  fetchImages     : PropTypes.func.isRequired,
  fetchCategories : PropTypes.func.isRequired,
  addImage        : PropTypes.func.isRequired,
  deleteImage     : PropTypes.func.isRequired,
  setCategory     : PropTypes.func.isRequired,
  images          : PropTypes.array,
  categories      : PropTypes.array,
};



export default connect(
  ({ images, categories }) => ({ images, categories }),
  (dispatch) => (bindActionCreators({ fetchImages, deleteImage, fetchCategories, setCategory, addImage }, dispatch))
)(Gallery);