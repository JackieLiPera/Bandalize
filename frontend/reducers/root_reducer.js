import SessionsReducer from './sessions_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import EntitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: EntitiesReducer,
  ui: uiReducer,
  errors: SessionErrorsReducer,
  session: SessionsReducer
});
