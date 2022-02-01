import { EmployeesType } from './../../models/profile/general-profile.model';

export enum EmployeesActionType {
  HR_FETCH_EMPLOYEES_SUCCESS = 'HR_FETCH_EMPLOYEES_SUCCESS'
}

export const fetchEmployeesSuccess = (employees: Array<EmployeesType>) => ({
  type: EmployeesActionType.HR_FETCH_EMPLOYEES_SUCCESS,
  employees: employees
});