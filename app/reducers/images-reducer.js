import * as types from 'constants/general-types';
import findIndex from 'lodash/findIndex';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case types.FETCH_IMAGES :
      return [ ...state, ...action.data ];

    case types.ADD_IMAGE + '_FULFILLED' :
      return [ ...state, ...action.data ];      

    case types.DELETE_IMAGE : 
      const index = findIndex(state, i => i.id == action.data);
      return [ ...state.slice(0, index), ...state.slice(index) ];


    default :
      return state;
  }

}