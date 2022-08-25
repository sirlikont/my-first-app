import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    error: false,
    success: false,
    list: [],
  },
  reducers: {
    loadUsers: (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
      state.list = [];
    },
    loadUsersSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.list = action.payload;
    },
    loadUsersFailure: (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
      state.list = [];
    },
    deleteUsers: (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
        state.list = [];
      },
    deleteUserFailure: (state, id) => {
        state.loading = false;
        state.success = false;
        state.error = true; 
    },
    deleteUserSuccess: (state, id) => {
     state.loading = false;
     state.success = true;
     state.error = false;
    }
  },
})

export const { loadUsers, loadUsersSuccess, loadUsersFailure, deleteUserSuccess } = usersSlice.actions;

export default usersSlice.reducer; 