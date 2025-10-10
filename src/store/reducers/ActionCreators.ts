import axios from 'axios'
import { IUser } from "../../models/IUsers";
import { AppDispatch } from "../store";
import { userSlice } from './UserSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    } catch (e) {
        dispatch(userSlice.actions.usersFetchingError('Request failed with status code 404'))
    }
}
*/

export const fetchUsersAll = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)