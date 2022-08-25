import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/userSlice'
import employeesReducer from './slices/employeesSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    employees: employeesReducer,
  }
})