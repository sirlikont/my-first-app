import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
      loading: false,
      error: false,
      success: false,
      list: [],
    },
    reducers: {
      loadEmployees: (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
        state.list = [];
      },
      loadEmployeesSuccess: (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.list = action.payload;
      },
      loadEmployeesFailure: (state) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.list = [];
      },
      deleteEmployees: (state) => {
          state.loading = true;
          state.success = false;
          state.error = false;
          state.list = [];
        },
      deleteEmployeesFailure: (state, id) => {
          state.loading = false;
          state.success = false;
          state.error = true; 
      },
      deleteEmployeesSuccess: (state, id) => {
       state.loading = false;
       state.success = true;
       state.error = false;
      }
    },
  })
  
  export const { loadEmployees, loadEmployeesSuccess, loadEmployeesFailure, deleteEmployeesSuccess } = employeesSlice.actions;
  
  export default employeesSlice.reducer; 