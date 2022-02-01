import { EmployeesState } from '../../models/profile/general-profile.model';
import { EmployeesActionType } from '../actions/employee.actions';

const initialState: EmployeesState = {
  employees: []
};

export const employeesReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    case EmployeesActionType.HR_FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.employees
      };
    default:
      return { ...state };
  }
};
