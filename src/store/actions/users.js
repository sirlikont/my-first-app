import { loadUsers, loadUsersSuccess, loadUsersFailure, deleteUser, deleteUserFailure, deleteUserSuccess } from "../slices/userSlice";

export function fetchUsers() {
  return async dispatch => {
    dispatch(loadUsers())

    try {
      const response = await fetch('http://localhost:3002/tribes');
      const data = await response.json()

      dispatch(loadUsersSuccess(data))
    } catch (error) {
      dispatch(loadUsersFailure())
    }
  }
} 

export function deleteTribe() {

}
