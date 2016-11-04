import React, { Component, PropTypes } from 'react';
import { fetchImagesData, addImage, deleteImage, fetchCategories, setCategory, getImageByPath } from 'actions/general-actions';
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
    this.props.fetchImagesData();
    this.props.fetchCategories();
  }

  handleImageDelete(path) {
    this.props.deleteImage(path);
  }

  handleImageSubmit(file) {
    const { categories } = this.props;
    let categoryId = categories.filter(cat => {
      return cat.active;
    })[0].id;
    this.props.addImage(file, categoryId);
  }

  renderImages() {
    const { images, categories } = this.props;
    let categoryId = categories.filter(cat => {
      return cat.active;
    });
    categoryId = categoryId[0] ? categoryId[0].id : 0;

    if(images) {
      return (images.map((image, index) => {
        if(categoryId === 0 || (image.category_id && image.category_id == categoryId))
          return (
            <Image 
              key={ image.id }
              onDelete={ this.handleImageDelete.bind(this) } 
              getImageLink={ this.props.getImageByPath.bind(this) }
              { ...image } />
          );
      }));
    }
    return null;
  }

  
  renderNavigationItems() {
    const { categories, images } = this.props;
    if(!categories) return null;

    return (categories.map(cat => {
      // TODO: here should find saved images for current category
      let imagesQuantity = images.filter(image => cat.id.toString() === image.category_id).length;
      return (
        <button 
          key={cat.id} 
          className={classnames({ 
            'is-empty'  : !imagesQuantity,
            'is-active' : cat.active,
          })}
          onClick={() => { this.props.setCategory(cat.id) }}>
            {cat.name}{ imagesQuantity ? ' ('+imagesQuantity+')' : ''}
          </button>
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
            { this.renderImages() }
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
  fetchImagesData : PropTypes.func.isRequired,
  getImageByPath  : PropTypes.func.isRequired,
  fetchCategories : PropTypes.func.isRequired,
  addImage        : PropTypes.func.isRequired,
  deleteImage     : PropTypes.func.isRequired,
  setCategory     : PropTypes.func.isRequired,
  images          : PropTypes.array,
  categories      : PropTypes.array,
};



export default connect(
  ({ images, categories }) => ({ images, categories }),
  (dispatch) => (bindActionCreators({ 
    fetchImagesData, 
    deleteImage, 
    fetchCategories, 
    setCategory, 
    addImage, 
    getImageByPath 
  }, dispatch))
)(Gallery);