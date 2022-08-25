import { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure, deleteEmployees, deleteEmployeesFailure, deleteEmployeesSuccess } from "../slices/employeesSlice";

export function fetchEmployees() {
  return async dispatch => {
    dispatch(loadEmployees())

    try {
      const response = await fetch('http://localhost:3002/employees');
      const data = await response.json()

      dispatch(loadEmployeesSuccess(data))
    } catch (error) {
      dispatch(loadEmployeesFailure())
    }
  }
} 