import * as types from 'constants/general-types';
import findIndex from 'lodash/findIndex';

const INITIAL_STATE = [];
let index = null;

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case types.FETCH_IMAGES + '_FULFILLED' :
      if(action.payload.data.entries[0]) {
        let images = action.payload.data.entries.map(image => {
          if(/category-\d+/.test(image.name)) {
            return {
              ...image,
              category_id: image.name.split('.category-')[1].split('.')[0]
            };
          }
          return image;
        });
        return [ ...state, ...images ];
      }
      else return state;


    case types.ADD_IMAGE + '_FULFILLED' :
      if(action.payload) {

        let object = action.payload.data;
        let name = action.payload.data.name;
        if(/category-\d+/.test(action.payload.data.name))
          object.category_id = name.split('.category-')[1].split('.')[0];

        return [ 
          ...state, 
          action.payload.data
        ];
      }
      else return state;


    case types.GET_IMAGE_URL + '_FULFILLED' :
      let imagePath = action.payload.data.metadata.path_lower;
      index = findIndex(state, i => i.path_lower == imagePath);
      if(index === -1) return state;
      else return [ 
        ...state.slice(0, index), 
        {
          ...state[index],
          link : action.payload.data.link
        },
        ...state.slice(index + 1) 
      ];


    case types.DELETE_IMAGE + '_FULFILLED' : 
      index = findIndex(state, i => i.id == action.payload.data.id);
      if(index === -1) return state;
      else return [ ...state.slice(0, index), ...state.slice(index + 1) ];


    default :
      return state;
  }

}