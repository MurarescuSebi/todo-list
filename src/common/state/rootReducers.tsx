import { combineReducers } from 'redux';
import { employeesReducer } from './reducers/employees.reducers';

export const rootReducers = combineReducers({
  employees: employeesReducer,
});
