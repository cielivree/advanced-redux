import { AppDispatch } from "../store";
import axios from 'axios'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    } catch (e) {

    }
}