import SessionsReducer from './sessions_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import EntitiesReducer from './entities_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionsReducer,
  errors: SessionErrorsReducer,
  entities: EntitiesReducer
});
