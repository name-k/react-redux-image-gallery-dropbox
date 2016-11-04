import axios from 'axios';
import findIndex from 'lodash/findIndex';
import Dropbox from 'dropbox';

import * as types from 'constants/general-types';

const DROPBOX_TOKEN = 'JIuo_a9Uk-cAAAAAAAAAHl0AXXJMtQ_tn7ew81HXevGw4gs1xE1ISFmmUjghitjk';
const DROPBOX_FOLDER = '/sailwithme';

const DROPBOX_API_HEADERS = {
  'Authorization'   : 'Bearer JIuo_a9Uk-cAAAAAAAAAHl0AXXJMtQ_tn7ew81HXevGw4gs1xE1ISFmmUjghitjk',
};


// const dropbox = new Dropbox({
//   accessToken: DROPBOX_TOKEN
// });


export const fetchImagesData = function() {
  // let images = localStorage.getItem('images') || [];
  // images = JSON.parse(images);
  const promise = axios
    .post('https://api.dropboxapi.com/2/files/list_folder', {
      path: "",
      include_media_info: true
    }, {
      'headers': {
        ...DROPBOX_API_HEADERS,
        "Content-Type" : "application/json",
      }
    });

  return {
    type: types.FETCH_IMAGES,
    payload : promise
  };
};


export const getImageByPath = function(path) {

  const promise = axios.post('https://api.dropboxapi.com/2/files/get_temporary_link', {
      path
    }, {
      headers: {
        ...DROPBOX_API_HEADERS,
        'Content-Type' : 'application/json',
        // 'Dropbox-API-Arg': `{"path":"${path}"}`
      }
    });

  return {
    type    : types.GET_IMAGE_URL,
    payload : promise,
  };
};


export const addImage = function (file, category_id = null) {

  let fileName = file.name.split('.');
  fileName = `${new Date().getTime()}.category-${category_id}.${fileName[fileName.length - 1]}`;

  const promise = axios
    .post('https://content.dropboxapi.com/2/files/upload', file, {
      'headers': {
        ...DROPBOX_API_HEADERS,
        "Content-Type": "application/octet-stream",
        "Dropbox-API-Arg" : `{"path":"/${fileName}","autorename":true}`,
      }
    });

  return {
    type: types.ADD_IMAGE,
    payload: promise
  };
  
};

export const deleteImage = function (path) {

  const promise = axios
    .post('https://api.dropboxapi.com/2/files/delete', {
      path
    }, {
      headers: {
        ...DROPBOX_API_HEADERS,
        'Content-Type' : 'application/json'
      }
    });

  return {
    type: types.DELETE_IMAGE,
    payload: promise
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