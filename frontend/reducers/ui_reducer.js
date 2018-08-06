import { combineReducers } from 'redux';

import ModalReducer from './modal_reducer';
import SearchReducer from './search_reducer';

export default combineReducers({
  ModalReducer,
  SearchReducer
});
