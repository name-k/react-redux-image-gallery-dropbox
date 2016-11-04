import * as types from 'constants/general-types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case types.FETCH_CATEGORIES :
      return [ ...state, ...action.data ];

    case types.SET_CATEGORY :
      return state.map((item) => ({ 
        ...item,
        active : (item.id === action.data)
      }));

    default :
      return state;
  }

}