import axios from 'axios';
import { EmployeesType } from '../../models/profile/general-profile.model';
import { fetchEmployeesSuccess } from '../actions/employee.actions';

export const fetchDepartmentsThunk = () => async (dispatch: any) => {
  return await axios.get(`http://localhost:5000/todo`)
    .then(response => {
      return dispatch(fetchEmployeesSuccess(response.data as Array<EmployeesType>));
    })
    .catch(err => console.log('err', err));
};