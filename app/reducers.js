import { combineReducers } from 'redux';

import images from 'reducers/images-reducer';
import categories from 'reducers/categories-reducer';

const rootReducer = combineReducers({
  images, categories
});

export default rootReducer;