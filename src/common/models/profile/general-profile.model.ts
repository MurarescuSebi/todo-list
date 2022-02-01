export type EmployeesType = {
  id: number;
  text: string;
};
 
export interface EmployeesState {
  employees: Array<EmployeesType>;
}