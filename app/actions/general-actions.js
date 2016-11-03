import * as types from 'constants/general-types';

export const fetchImages = function() {
  const images = localStorage.getItem('images') || [];
  return {
    type: types.FETCH_IMAGES,
    data : JSON.parse(images)
  };
};

export const addImage = function (image) {

  const promise = new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function () {
      let imageBase64 = reader.result;

      let images = localStorage.getItem('images') || [];
      const newImageObj = {
        id : new Date().getTime(),
        base64 : imageBase64
      };

      images = JSON.parse(images);
      images.push(newImageObj);
      localStorage.setItem('images', JSON.stringify(images));
      resolve(imageBase64);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(image);
  });
  
  return {
    type: types.ADD_IMAGE,
    payload: promise
  };
};

export const deleteImage = function (id) {
  return {
    type: types.DELETE_IMAGE,
    data: id
  };
};


export const fetchCategories = function() {
  const categories = require('../gags/categories-gag');
  return {
    type: types.FETCH_CATEGORIES,
    data : categories
  };
};

export const setCategory = function(id) {
  return {
    type: types.SET_CATEGORY,
    data : id
  };
}