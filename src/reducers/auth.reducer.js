import { State } from "react-native-gesture-handler"

const initialState = {
    user: null,
    isLoggedIn: false,
    isError: false,
    error: null
}

export default (state = {initialState}, action) => {
    return state;
}